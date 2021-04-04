import { ReactElement, useEffect, useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';
import CountryService from '../../services/http.service';
import CountryPage from '../CountryPage/CountryPage';
import Footer from '../Footer/Footer';
import MainPage from '../MainPage/MainPage';

const shuffleArray = (array: Country[]): Country[] => {
  const newArr = array.slice();

  for (let i = newArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
};

const TravelApp = (): ReactElement => {
  const [countriesList, setCountriesList] = useState(null);
  const [randomCountriesList, setRandomCountriesList] = useState(null);
  const numberOfRandomCountries = 8;

  useEffect(() => {
    CountryService.fetchAllCountries().then((countries: Country[]) => {
      setCountriesList(countries);
      const shuffledArray = shuffleArray(countries).slice(
        0,
        numberOfRandomCountries
      );
      setRandomCountriesList(shuffledArray);
    });
  }, []);

  return (
    <Router>
      <div>
        <Route
          component={() => (
            <MainPage
              countriesList={countriesList || null}
              randomCountriesList={randomCountriesList || null}
            />
          )}
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
