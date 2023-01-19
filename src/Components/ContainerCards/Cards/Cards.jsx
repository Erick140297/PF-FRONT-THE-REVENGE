import React from 'react'
import styles from "./Cards.css"

export default function Cards({category, image}) {
  return (
    <div className='Cards'>
      <div className='container'>
      
        <div className="imageCards">
                <img src={image} />
            </div> 
            <div className='category'>
        <h3>{category}</h3>
        </div>
    </div>
    </div>
  );
}
