import Country from "./Country"


const CountryList = ({world}) => {
    return (
        <div>
            {world.map(country => <Country key = {country.name} country = {country}/>)}
        </div>
    )
}

export default CountryList