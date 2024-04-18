import Country from "./Country"


const CountryList = ({world, setCountry}) => {
    return (
        <div>
            {world.map(country => <Country key = {country.name.common} country = {country} setCountry={setCountry}/>)}
        </div>
    )
}

export default CountryList