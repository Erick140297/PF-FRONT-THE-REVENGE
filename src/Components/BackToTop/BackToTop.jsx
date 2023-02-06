import React from "react";
import {useEffect, useState} from "react";
import "./BackToTop.css"

function BackToTop(){
    const [backToTopButton, setBackToTopButton]= useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = ()=> {
        window.scrollTo({
            top:0,
            behevior:"smooth"
        })
    }
    return <div className> 
            {backToTopButton && (
                <button className="backToTop" onClick={scrollUp}>UP</button>
            )}
    </div>
}

export default BackToTop;