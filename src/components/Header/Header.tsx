import { ReactElement } from 'react';
import { Navbar } from 'react-bootstrap';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

type HeaderProps = {
  isMainPage: boolean;
  searchHandler?: (value: string) => void;
  searchValue?: string;
};

const Header = ({
  isMainPage,
  searchHandler,
  searchValue,
}: HeaderProps): ReactElement => {
  const search = isMainPage ? (
    <Search searchHandler={searchHandler} searchValue={searchValue} />
  ) : null;

  return (
    <Navbar bg="dark" className="header" variant="dark">
      <Navbar.Brand href="/">Travel App</Navbar.Brand>
      {search}
      <LanguageSwitcher />
    </Navbar>
  );
};

Header.defaultProps = {
  searchHandler: null,
  searchValue: '',
};

export default Header;
