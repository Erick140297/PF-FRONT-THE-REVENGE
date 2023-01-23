import React from "react";
import Cards from "./Cards/Cards";
import styles from "./Container.css"

const Container = () => {
  return (
    <div className="cajitas">
        <Cards category="Componentes de pc" image="https://i0.wp.com/www.parapcgamers.com/wp-content/uploads/2020/05/componentes-pc-gamer-2020.jpg?fit=770%2C422&ssl=1" key={0}></Cards>
        <Cards category="Perifericos" image="https://assets.spartangeek.com/cc/audifonos-con-microfono-gamer.jpg" key={1}></Cards>
        <Cards category="Mantenimiento" image="https://www.prensalibre.com/wp-content/uploads/2019/09/shutterstock_660436630.jpg?quality=52&w=760&h=430&crop=1" key={2}></Cards>
    </div> 
  )
}

export default Container;




