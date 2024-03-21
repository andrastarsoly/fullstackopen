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

export default Filter