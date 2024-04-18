const DetailedCountry = ({country}) => {

    const c = country[0];

console.log(c.languages)

    return(
        <div>
            <p>capital {c.capital}</p>
            <p>area {c.area}</p>
            {c.languages.length < 2 ? 
                c.languages
            :
                c.languages.map(([code, lang]) => <li key = {code}> {lang}</li>)
            }
            <p><img src={c.flags.png} alt="My PNG Image" /></p>
        </div>
    )

}

export default DetailedCountry