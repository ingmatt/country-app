import React from "react";
//import { Link } from "react-router-dom";

export default function Borders(props) {
  const [countryData, setCountryData] = React.useState(null);
  const isMountedRef = React.useRef(true);

  React.useEffect(() => {
    isMountedRef.current = true;

    if (props.border && props.border.length > 0) {
      const fetchCountryData = async () => {
        try {
          const fetchedCountries = await Promise.all(
            props.border.map((borderCode) =>
              fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
                .then((res) => res.json())
                .then((data) => data[0])
                .catch((error) => {
                  console.error("Error fetching country data:", error);
                  return null;
                })
            )
          );

          if (isMountedRef.current) {
            setCountryData(fetchedCountries);
          }
        } catch (error) {
          console.error("Error fetching country data:", error);
          if (isMountedRef.current) {
            setCountryData([]);
          }
        }
      };

      fetchCountryData();
    } else {
      setCountryData([]);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [props.border]);

  return (
    <div>
      {countryData ? (
        countryData.map((country) => (
          <a href={`/country/${country.name.common}`} key={country.name.common}>
            <button className="border-btn">{country.name.common}</button>
          </a>
        ))
      ) : 
        <p>Loading...</p>
      }
    </div>
  );
}