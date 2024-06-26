import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/personService'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };


  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    const found = persons.find((element) => element.name === personObject.name);

    if(found === undefined){
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotification(
          `Added ${personObject.name}`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }

    else{
      if(window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one?`)){
        personService
          .update(found.id, personObject)
          .then(returnedPerson => {
            const foundPersonIndex = persons.findIndex((element) => element.name === returnedPerson.name)
            const updated = [...persons]
            updated[foundPersonIndex] = returnedPerson
            setPersons(updated)
            setNewName('')
            setNewNumber('')
            setNotification(
              `${personObject.name}'s number has been changed `
            )
            setTimeout(() => {
              setNotification(null)
            }, 3000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${personObject.name} has already been removed from server`
            )
            setPersons(persons.filter(p => p.id !== found.id))
            setTimeout(() => {
              setErrorMessage(null)
            }, 3000)
          })
      }
    }
  }

  const deletePerson = (id) => {
    const deletingPerson =  persons.find((element) => element.id === id);
    if(window.confirm(`Delete ${deletingPerson.name}?`)){
      personService
        .remove(id)
        .then(()=>{
          const filtered = persons.filter((element) => element.id !== id)
          setPersons(filtered);
        })
        .catch(error => {
          setErrorMessage(
            `Information of ${deletingPerson.name} has already been removed from server`
          )
          setPersons(persons.filter(p => p.id !== deletingPerson.id))
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    }
  } 


  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <ErrorMessage message={errorMessage} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App