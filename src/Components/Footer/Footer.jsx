import Button from "react-bootstrap/Button";
import React from "react";
import "./footer.css";
import whatsapp from "../../assets/whatsapp.svg";
import gmail from "../../assets/gmail.svg";
import intel from "../../assets/intel.svg";
import amd from "../../assets/amd.svg";
import asus from "../../assets/asus.svg";
import gigabyte from "../../assets/gigabyte.svg";
import logitech from "../../assets/logitech.svg";
import msi from "../../assets/msi.svg";

const Footer = () => {
  return (
    <div id="wrapper">
      <footer>
        <div className="container-fluid text-center text-md-left">
          <div className="row footer">
            <div className="col-md-1 mb-md-0 mb-3 marcas">
              <h5 className="text-uppercase">Marcas</h5>
              <ul className="list-unstyled lista">
                <li>
                  <a href="https://www.amd.com/es" target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-danger">
                      <img src={amd} alt="amd" />
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="https://www.intel.com/content/www/us/en/homepage.html" target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-info">
                      <img src={intel} alt="intel" />
                    </Button>
                  </a>
                </li>
                 <li>
                  <a href='https://www.asus.com/co/' target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-danger">
                      <img src={asus} alt="asus" />
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="https://www.gigabyte.com/" target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-info">
                      <img src={gigabyte} alt="gigabyte" />
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="https://latam.msi.com/" target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-danger">
                      <img src={msi} alt="msi" />
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="https://www.logitech.com/es-roam" target="_blank" rel="noopener noregerrer">
                    <Button variant="outline-info">
                      <img src={logitech} alt="logitech" />
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-1 mb-md-0 mb-3 contacto">
              <h5 className="text-uppercase">Contacto</h5>
              <ul className="list-unstyled">
                <a
                  href="https://wa.link/glhjh5"
                  target="_blank" 
                  rel="noopener noregerrer"
                >
                  <li>
                    <Button variant="outline-success">
                      Whatsapp⠀
                      <img src={whatsapp} alt="lo" />
                    </Button>
                  </li>
                </a>
                <a href="mailto:santicasas667@gmail.com">
                  <li>
                    <Button variant="outline-danger">
                      ⠀⠀Mail⠀⠀⠀
                      <img src={gmail} alt="gmail" />⠀
                    </Button>
                  </li>
                </a>
              </ul>
            </div>
            <div className="col-md-5 mt-md-0 mt-4 leyenda">
              <h5 className="text-uppercase">Galaxia Tech</h5>
              <p>
                Nos dedicamos a la venta de los mejores componentes de PC, te
                ofrecemos los componentes esenciales para tu PC, junto con una
                gran gama de perrifericos para asegurar una experiencia comoda y
                los respectivos equipos de mantenimiento para que puedas cuidar
                de tu preciada reliquia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
