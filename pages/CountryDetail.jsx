import React from "react"
import Borders from "../components/Borders"
import { useParams, useNavigate } from 'react-router-dom';

export default function CountryDetail(props) {

    const { country } = useParams()

    console.log(country)

     const navigate = useNavigate()

    const [name, setName] = React.useState("")

    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
           .then(res => res.json())
            .then(data => setName(data[0]))
        },[])

        function goBack(){
            navigate(`/`)
        }

    return (
        <div className="country-details">
            <button className="back-btn" onClick={goBack}>Back</button>

            {name ? 
            <div key={name.name.common} className="country-container-details">
                <div>
                <img className="country-flag" src={name.flags.png} alt={`flag of ${name.name.official}`} />
                </div>
                <div className="country-details">
                <h2>{name.name.common}</h2>
                <p><span>Population:</span> {name.population.toLocaleString()}</p>
                <p><span>Region:</span> {name.region}</p>
                <p><span>Sub Region:</span> {name.subregion}</p>
                <p><span>Capital: </span>{name.capital}</p>
                <span>Borders:</span><Borders border={name.borders} />
                </div>
            </div>: null}
        </div>
    )
}