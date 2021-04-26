import { ReactElement } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

import { Country } from '../../models/CountryList.model';

import './SelectedCountryModal.scss';

type SelectedCountryModalProps = {
  onHide: () => any;
  selectedCountry: Country;
  show: boolean;
};

const SelectedCountryModal = ({
  onHide,
  selectedCountry,
  show,
}: SelectedCountryModalProps): ReactElement => {
  const { alpha2Code, name, flag, capital, population, area } = selectedCountry;
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {name} ({alpha2Code})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.Img src={flag} variant="top" />
        <ListGroup variant="flush">
          <ListGroup.Item variant="#212529">Area: {area}</ListGroup.Item>
          <ListGroup.Item>Population: {population}</ListGroup.Item>
          <ListGroup.Item>Capital: {capital}</ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Link to={`/${name.toLocaleLowerCase()}`}>
          <Button variant="light">Learn more</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectedCountryModal;
