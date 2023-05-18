import './App.css';
import CountriesComponent from './components/Countries';
import VisitedCountriesComponent from './components/VisitedCountries';
import CountriesContainer from './containers/CountriesContainer';

function App() {
  return (
    <>
      <VisitedCountriesComponent />
      <CountriesComponent/>
      <CountriesContainer/>  
    </>
  );
}

export default App;
