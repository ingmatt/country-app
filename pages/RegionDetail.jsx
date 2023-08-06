import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

export default function RegionDetail() {

    const { region } = useParams()

    const [name, setName] = React.useState("")

    const navigate = useNavigate()

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/region/${region}`)
           .then(res => res.json())
            .then(data => setName(data))
        },[])

    console.log(name)

    function goBack(){
        navigate(`/`)
    }

    return (
        <div>
            <div className="search-selector">
                <button className="back-btn" onClick={goBack}>Back</button>
            </div>
            <h1>{region}</h1>
        <div className="countries-container">{name ? name.map(country => 
            <Link key={country.name.common} className="country-link" to={`/country/${country.name.common}`} >
                <div key={country.name.common} className="country-container">
                <img className="flag" src={country.flags.png} alt={`flag of ${country.name.official}`} />
                <h3>{country.name.common}</h3>
                <p><span>Population:</span> {country.population.toLocaleString()}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital: </span>{country.capital}</p>
                </div>
            </Link>) : null}
        </div>
        </div>
    )
}