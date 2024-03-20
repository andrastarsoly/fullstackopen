import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Asd Asd' }
  ]) 
  const [newName, setNewName] = useState('')



  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
  
    const found = persons.find((element) => element.name === personObject.name);

    if(found === undefined){
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    else{
      console.log(found)
      alert(`${personObject.name} is already added to the phonebook`)
    }
    
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
          value={newName}
          onChange={handleNameChange}
        />
        </div>
        <button type="submit">add</button>
      </form>   
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}> {person.name}</li>)}
      </ul>

    </div>
  )
}

export default App