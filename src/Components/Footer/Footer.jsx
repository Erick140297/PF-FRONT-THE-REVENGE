import React from 'react'
import './footer.css'
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
              {/* <li>
                <Button variant="outline-danger">
                  <img src={amd} alt="amd" />
                </Button>
              </li>
              <li>
                <Button variant="outline-info">
                  <img src={intel} alt="intel" />
                </Button>
              </li> */}
            </ul>
          </div>
           <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Ayuda</h5>
                <ul className="list-unstyled">
                    <li >WhatsApp</li>
                    <li>Mail</li>
                </ul>
            </div>
            <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Integra</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">WhatsApp</a></li>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </div>
            <div className="col-md-5 mt-md-0 mt-4">
                <h5 className="text-uppercase">Galaxia Tech</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure minus corporis, necessitatibus natus et consectetur provident ratione obcaecati expedita adipisci. Esse aut eveniet necessitatibus vitae illo corporis vero rerum veniam.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
