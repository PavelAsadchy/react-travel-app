import { ListGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="bg-light container footer ">
      <div className="row">
        <ListGroup horizontal>
          <ListGroup.Item>
            <a href="https://github.com/PavelAsadchy">Pavel Asadchy</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/KaguraDun">Vasily Kovnev</a>
          </ListGroup.Item>
        </ListGroup>
      </div>

      <span className="row">2021</span>

      <div className="row">
        <img alt="" className=" logo" src="../../rs_school_js.svg" />
      </div>
    </div>
  );
};

export default Footer;
