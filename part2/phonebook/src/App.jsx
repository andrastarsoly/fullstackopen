import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '123456'
    },
    { name: 'Artur Hellas',
      number: '12342'
    },
    { name: 'Barto Hellas',
      number: '123456'
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [search, setSearch] = useState(persons)



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    if(event.target.value != ''){
      setSearch(persons.filter(person => person.name.startsWith(newFilter)))
    }
    else{
      setSearch(persons)
    }

  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
  
    const found = persons.find((element) => element.name === personObject.name);

    if(found === undefined){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
    else{
      console.log(found)
      alert(`${personObject.name} is already added to the phonebook`)
    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown in: 
        <input 
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
          value={newName}
          onChange={handleNameChange}
        />
         <div>number: 
          <input 
            value={newNumber}
            onChange={handleNumberChange}/>
         </div>
        </div>
        <button type="submit">add</button>
      </form>   
      <h2>Numbers</h2>
      <ul>
        {search.map(person => <li key={person.name}> {person.name} {person.number}</li>)} 
      </ul>

    </div>
  )
}

export default App