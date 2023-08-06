import React from "react";
import { useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi"

export default function Search(props) {


    const [name, setName] = React.useState("")
    const [country, setCountry] = React.useState("")

    const  handleChange = (event) => {
		setName(event.target.value);
	};

    const navigate = useNavigate()

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          navigate(`/country/${country.name.common}`)
        }
      };
    

    React.useEffect(() => {
      if(name) {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
           .then(res => res.json())
            .then(data => setCountry(data[0]))
      }
     },[name])
        

    return (
            <div className="search-container">
                <BiSearchAlt size={40} className="search-icon" />
                <input className="search-input"  type="text" placeholder="Search for a country..." value={name} onChange={handleChange} onKeyPress={handleKeyPress} />
            </div>
    )
}