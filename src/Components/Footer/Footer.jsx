import React from 'react'
import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer >
    <div className="container-fluid text-center text-md-left">
        <div className="row footer">

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-uppercase">categorias</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Perifericos</a></li>
                    <li><a href="#!">Componentes de PC</a></li>
                    <li><a href="#!">Mantenimiento</a></li>
                    
                </ul>
            </div>

            <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Marcas</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Intel</a></li>
                    <li><a href="#!">Amd</a></li>
                    <li><a href="#!">Msi</a></li>
                    <li><a href="#!">Logitec</a></li>
                </ul>
            </div>
            <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Ayuda</h5>
                <ul className="list-unstyled">
                    <li ><a href="#!">WhatsApp</a></li>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </div>
            <div className="col-md-1 mb-md-0 mb-3">
                <h5 className="text-uppercase">Integra</h5>
                <ul className="list-unstyled">
                <Link to="/about">
          <button className="buttonFooter">Equipo</button>
        </Link>
                    <li><a href="#!">Link 2</a></li>
                </ul>
            </div>
            <div className="col-md-5 mt-md-0 mt-4">
                <h5 className="text-uppercase">Galaxia Tech</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure minus corporis, necessitatibus natus et consectetur provident ratione obcaecati expedita adipisci. Esse aut eveniet necessitatibus vitae illo corporis vero rerum veniam.</p>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>

</footer>
  )
}

export default Footer