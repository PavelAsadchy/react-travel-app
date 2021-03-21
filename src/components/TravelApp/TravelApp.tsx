import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';
import { CountryService } from '../../services/http.service';
import CountryPage from '../CountryPage/CountryPage';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array: Country[]) {
  const newArr = array.slice();

  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}

const TravelApp = () => {
  const [countriesList, setCountriesList] = useState(null);
  const [randomCountriesList, setRandomCountriesList] = useState(null);
  const numberOfRandomCountries = 8;

  useEffect(() => {
    CountryService.fetchAllCountries()
      .then((response) => response.json())
      .then((countries: Country[]) => {
        setCountriesList(countries);
        const shuffledArray = shuffleArray(countries).slice(0, numberOfRandomCountries);
        setRandomCountriesList(shuffledArray);
      });
  }, []);

  return (
    <Router>
      <div>
        <Route
          component={() => <MainPage countriesList={countriesList || null} randomCountriesList={randomCountriesList || null} />}
          exact
          path="/"
        />
        <Route exact path="/:country" render={() => <CountryPage />} />
        <Footer />
      </div>
    </Router>
  );
};

export default TravelApp;
