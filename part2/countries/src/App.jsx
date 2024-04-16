import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import countryService from './countryService'
import CountryList from './components/CountryList'
import Country from './components/Country'

function App() {

  const [country, setCountry] = useState(0)
  const [world, setWorld] = useState([])


  const onSearch = (event) => {
    const newValue = event.target.value;
    setCountry(newValue);
    console.log(newValue);
  };


  useEffect(() => {
    countryService
    .getAll()
    .then(initWorld => {
      setWorld(initWorld)
    })
  }, [])

  console.log(world)



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
      <CountryList world={world}/>
      </div>
    </>
  )
}

export default App
