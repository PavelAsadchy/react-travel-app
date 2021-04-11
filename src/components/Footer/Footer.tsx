import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <Navbar bg="dark" className="footer" variant="dark">
      <Nav>
        <Nav.Link href="https://github.com/PavelAsadchy">
          Pavel Asadchy
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
