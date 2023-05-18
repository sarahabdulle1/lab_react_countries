const CountryComponent = ({country}) => {

    // const flag = Country.flag;
    return (  
        <ul> 
            <li> {country.name.common}! {country.flag}</li>
        </ul>
    );
}
 
export default CountryComponent;