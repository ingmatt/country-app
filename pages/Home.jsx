import React from "react"
import Search from "../components/Search"
import RegionSelect from "../components/RegionSelect"
import { Link } from 'react-router-dom';

export default function Home() {
    
    const [countries, setCountries] = React.useState()
    
     React.useEffect(() => {
     fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
         .then(data => setCountries(data))
     },[])

    let data
    if(countries){
        data = countries.map(country => 
        <Link key={country.name.common} className="country-link" to={`/country/${country.name.common}`} ><div key={country.name.common} className="country-container">
            <img className="flag" src={country.flags.png} alt={`flag of ${country.name.official}`} />
            <h3>{country.name.common}</h3>
            <p className="country-info"><span>Population:</span> {country.population.toLocaleString()}</p>
            <p className="country-info"><span>Region:</span> {country.region}</p>
            <p className="country-info"><span>Capital: </span>{country.capital}</p>
        </div></Link>)
    } else {
       data = <h2>Loading...</h2>
    }
    
    return (
        <div >
            <div className="search-selector">
                <div className="search-component">
                    <Search />
                </div>
                <div className="search-component">
                    <RegionSelect />
                </div>
            </div>
            {data ? <div className="countries-container">
                {data}
            </div> : null}
        </div>
    )
}