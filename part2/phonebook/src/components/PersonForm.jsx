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

export default PersonForm