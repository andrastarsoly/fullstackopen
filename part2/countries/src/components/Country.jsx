const Country = ({country, setCountry}) => {
    return (
        <div>
            {country.name.common} <button onClick={()=>setCountry(country.name.common)}>show</button>
        </div>
    )
}

export default Country