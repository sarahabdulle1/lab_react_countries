import { useState, useEffect } from "react";
import CountryComponent from "../components/CountryComponent";

const CountriesContainer = () => {

    // declare state for countries and visitedcountries
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState(null);

    const getAllCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        const countries = jsonData;

        setCountries(countries);
    }
    // display All Countries as default
    useEffect(() => {
        getAllCountries();
    }, [])

    // functionality to add country to visited list
    const addVisitedCountry = (newCountry) =>{
        setVisitedCountries([...visitedCountries, newCountry]);
    }


    const countryComponents = countries.map((country) => {
        return <CountryComponent country={country} />
    });

    return (  
        <>
            <h1>This is the country container!</h1>
            {countryComponents}
        </>
    );
}
 
export default CountriesContainer;