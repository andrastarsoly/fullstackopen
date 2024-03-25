import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


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
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    const found = persons.find((element) => element.name === personObject.name);
    console.log(found)
    if(found === undefined){
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
    else{
      window.confirm(`${personObject.name} is already added to the phonebook, replace the old number with a new one?`) ? 
      personService
        .update(found.id,personObject)
        .then(returnedPerson => {
          const foundPersonIndex = persons.findIndex((element) => element.name === returnedPerson.name)
          const updated = [...persons]
          updated[foundPersonIndex] = returnedPerson
          setPersons(updated)
          setNewName('')
          setNewNumber('')
        })
      :
      console.log("no")
    }
  }



  const deletePerson = (id) => {
    personService
      .remove(id)
      .then()
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