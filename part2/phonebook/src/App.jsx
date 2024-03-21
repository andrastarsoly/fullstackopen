import { useState } from 'react'

const PersonForm = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
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
  )
};


const Filter = ({filter, handleFilterChange}) => {
  return (
    <div>
      filter shown in: 
      <input 
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

const Persons = ({search}) => {
  return(
    <ul>
    {search.map(person => <li key={person.name}> {person.name} {person.number}</li>)} 
    </ul>
  )
}


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
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState(persons)


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filt = event.target.value
    setFilter(filt);
    if(event.target.value != ''){
      setSearch(persons.filter(person => person.name.toLowerCase().startsWith(filt.toLowerCase())))
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
      alert(`${personObject.name} is already added to the phonebook`)
    }
  }

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
      <Persons search={search}/>
    </div>
  )
}

export default App