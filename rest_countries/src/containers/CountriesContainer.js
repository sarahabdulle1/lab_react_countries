import { useState, useEffect } from "react";
import CountryComponent from "../components/CountryComponent";
// import VisitedCountriesComponent from "../components/VisitedCountryComponent";

const CountriesContainer = () => {

    // declare state for countries and visitedcountries
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

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

    // display All
    const countryComponents = countries.map((country) => {
        return <CountryComponent country={country} />
    });

    // display All Visited Countries
    const visitedCountriesList = visitedCountries.map((visitedCountry) => {
        return <CountryComponent visitedCountry={visitedCountry} />
    });

    return (  
        <>
            <h1>Travel Bucket List</h1>
            <h2>List of Visited Countries:</h2>
            {visitedCountriesList}
            <h2>List of All Countries!</h2>
            {countryComponents}
        </>
    );
}
 
export default CountriesContainer;