import Button from "react-bootstrap/Button";
import React from "react";
import "./footer.css";
import whatsapp from "../../assets/whatsapp.svg";
import gmail from "../../assets/gmail.svg";
import intel from "../../assets/intel.svg";
import amd from "../../assets/amd.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid text-center text-md-left">
        <div className="row footer">
          {/* <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-uppercase">categorias</h5>
                <ul className="list-unstyled">
                    <li>Perifericos</li>
                    <li>Componentes de PC</li>
                    <li>Mantenimiento</li>
                    
                </ul>
            </div> */}

          <div className="col-md-1 mb-md-0 mb-3 marcas">
            <h5 className="text-uppercase">Marcas</h5>
            <ul className="list-unstyled">
              <li>
                <Button variant="outline-danger">
                  <img src={amd} alt="amd" />
                </Button>
              </li>
              <li>
                <Button variant="outline-info">
                  <img src={intel} alt="intel" />
                </Button>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Ayuda</h5>
                <ul className="list-unstyled">
                    <li >WhatsApp</li>
                    <li>Mail</li>
                </ul>
            </div> 
            
            https://wa.link/bdmxpb
            */}
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
              los respectivos equipos de mantenimiento para que puedas cuidar de
              tu preciada reliquia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
