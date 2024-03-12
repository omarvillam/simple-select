import {useCallback, useState} from 'react'
import './App.css'
import {CountryProps, rawCountries} from "./utils/countries";
import Checkbox from "./components/Checkbox";

function App() {
  const [countries, setCountries] = useState<CountryProps[]>(
    rawCountries.map((label) => ({ label, selected: false }))
  );

  const handleToggle = useCallback((index: number) => {
    setCountries((prevCountries) => {
      const updatedCountries = [...prevCountries];
      updatedCountries[index] = { ...updatedCountries[index], selected: !updatedCountries[index].selected };
      return updatedCountries;
    });
  }, []);

  const handleToggleAll = useCallback(() => {
    setCountries((prevCountries) => {
      const allSelected = prevCountries.every((country) => country.selected);
      return prevCountries.map((country) => ({
        ...country,
        selected: !allSelected,
      }));
    });
  }, []);

  return (
    <div>
      <h3>Omar Villalobos</h3>
      <h1>Simple select</h1>
      <label>
        <input
          type="checkbox"
          checked={countries.every((country) => country.selected)}
          onChange={handleToggleAll}
        />
        Select All
      </label>
      {countries.map((country, index) => (
        <Checkbox key={index} label={country.label} selected={country.selected} onChange={() => handleToggle(index)} />
      ))}
    </div>
  )
}

export default App
