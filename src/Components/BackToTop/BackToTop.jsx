import React from 'react'
import { useEffect, useState } from 'react'
import './BackToTop.css'


const BackToTop = () => {

    const [BackToTop, setBackToTop] = useState(false)

    useEffect(() => {
        if(window.scrollY > 100){
            setBackToTop(true)
        }else{
            setBackToTop(false)
        }
    },[])
    
    
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            bahavior:"smooth"
        })
    }

    return (
    <div>
        {BackToTop && (
            <button className='backToTop' onClick={scrollUp}>^</button>
        )}
    </div>
  )
}

export default BackToTop 


