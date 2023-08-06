import React from "react"
import { useNavigate } from "react-router-dom"

export default function RegionSelect() {

    const navigate = useNavigate()

    const [region, setRegion] = React.useState("")

    if(region){
        navigate(`/region/${region}`)
    }

    return (
        <div className="search-select-container">
            <select className="search-container" name={region} onChange={e => setRegion(e.target.value)}>
                <option>Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="america">America</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
            <p>{region}</p>
        </div>
    )
}