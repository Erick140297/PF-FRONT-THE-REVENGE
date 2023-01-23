import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getCart } from '../../Redux/Actions'


const Cart = () => {
const idCart = useSelector((state)=>state.idCart)

const cart = useSelector((state)=>state.cart)

console.log(cart)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getCart(idCart))
},[])
  return (
    <div>Cart</div>
  )
}

export default Cart