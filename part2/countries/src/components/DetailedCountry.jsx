const DetailedCountry = ({country}) => {

    const c = country[0];

console.log(Object.entries(c.languages))

    return(
        <div>
            <h1>{c.name.common}</h1>
            <p>capital {c.capital}</p>
            <p>area {c.area}</p>
            <h2>Languages:</h2>
            <ul>
            {Object.entries(c.languages).map(([code, name]) => (
            <li key={code}>{name}</li>
            ))}
            </ul>
            <p><img src={c.flags.png} alt={c.flags.alt} /></p>
        </div>
    )

}

export default DetailedCountry