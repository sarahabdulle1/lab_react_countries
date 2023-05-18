const CountryComponent = ({country, visitedCountry, visitedCountries, setVisitedCountries}) => {

    // visitedCountry - TypeError: visitedCountries is not iterable

    const addVisitedCountry = () => {
        const visitedCountryName = country.name.common;
        const visitedCountryFlag = country.flag;

        const newVisitedCountry = {
            name: "visitedCountryName", 
            flag: "visitedCountryFlag"
            }
        setVisitedCountries([...visitedCountries, newVisitedCountry])
    }

    return (  
        <ul> 
            <li> {country.name.common}! {country.flag}</li>
            <button onClick={(event) => addVisitedCountry(event.target.value)}>
            visited    
            </button>
        </ul>
    );
}
 
export default CountryComponent;