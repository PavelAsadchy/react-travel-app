import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Search from '../Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

type HeaderProps = {
  isMainPage: boolean;
  searchHandler?: Function;
  searchValue?: string;
};

const Header = ({ isMainPage, searchHandler, searchValue }: HeaderProps) => {
  const search = isMainPage ? <Search searchHandler={searchHandler} searchValue={searchValue} /> : null;

  return (
    <Navbar bg="light" className="container header" expand="lg">
      <Link className="row" to="/">
        <h1 className="header__logo">Travel App</h1>
      </Link>
      {search}
      <LanguageSwitcher />
    </Navbar>
  );
};

export default Header;
