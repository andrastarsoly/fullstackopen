import { useState, useEffect } from 'react'
import countryService from './services/countryService'
import CountryList from './components/CountryList'
import DetailedCountry from './components/DetailedCountry'





function App() {

  const [country, setCountry] = useState('')
  const [world, setWorld] = useState([])

  const onSearch = (event) => {
    setCountry(event.target.value);
  };

  
  const filtered = world.filter(c =>
    c.name.common.toLowerCase().includes((country.toLowerCase()))
  )

  useEffect(() => {
    countryService
    .getAll()
    .then(initWorld => {
      setWorld(initWorld)
    })
  }, [])


  return (
    <>
      <div>
      <form>
        find countries:
        <input
          value={country}
          onChange={onSearch}
        />
      </form>
      </div>
      <div>
        {filtered.length == 1 ? 
          <DetailedCountry country={filtered}/>
        : (filtered.length < 10 && filtered.length > 1) ?  
          <CountryList world={filtered} setCountry={setCountry}/>
        : 'Too many matches, specify another filter' 
        }
      </div>
    </>
  )
}

export default App
