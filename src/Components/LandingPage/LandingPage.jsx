import React from "react";
import {Link} from "react-router-dom";
import styles from "./LandingPage.css"
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video5 from '../../assets/video5.mp4';
import { FaRocket } from "react-icons/fa";


export default function LandingPage(){
    return(
        <div className="landing">
            <div className="imgWrapper4">
                <div className="imgResponsiva">
                    <video src={video1} autoPlay loop muted></video>
                </div>
                <div className="imgResponsiva">
                    <video src={video2} autoPlay loop muted></video>
                </div>
                <div className="imgResponsiva">
                    <video src={video3} autoPlay loop muted></video>
                </div>
                <div className="imgResponsiva">
                    <video src={video5} autoPlay loop muted></video>
                </div>
            </div>
                <div className="header-overlay"></div>
                <div className="header-content">
                    <h1 className="h4 pb-2 mb-4 border-bottom border-light">BieNvEnId@ A GaLaXIA Tech!</h1>
                    <p className="text-end"><i></i> Un luNgAr dOndE enConTrArás lOs MejORes COMPONENTES pARa aRMar o aCtUaLizar Tu PC.</p>
                    <Link to ="/home" style={{textDecoration: 'none'}}>
                        <button className="btn btn-dark"><i><FaRocket /></i> INGRESAR</button>
                    </Link>
                </div>
        </div>
    )
}
