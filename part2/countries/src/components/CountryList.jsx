import Country from "./Country"


const CountryList = ({world, show}) => {
    return (
        <div>
            {world.map(country => <Country key = {country.name.common} country = {country} show={show}/>)}
        </div>
    )
}

export default CountryList