import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
 import  {postNewAdmin}from '../../../../Redux/Actions'
import { Link } from "react-router-dom";

//  import {useHistory} from 'react-router-dom'
import './CreateAdmin.css'

function validate (input){
  const errors ={}
  if(!input.name){
    errors.name = 'El nombre es requerido'
  }
  if(!input.email){
    errors.email = 'El email es requerido'
  }
  if(!input.lastName){
    errors.lastName = 'Los Apellidos es requerido'
  }
  return errors
}

function AdminCreateAdmin() {
  // const history = useHistory()

  const dispatch = useDispatch()
  
  const [customer,setCustomer] = useState({
    name: '',
    email: '',
    lastName:'',
    profile:'',
  })

  const [errors,setErrors] = useState({})

 

  const handleInput = (e) =>{
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...customer,
      [e.target.name]: e.target.value
    }))
  }

  const  handleSubmit =  async(e)=>{
    const input = {
    name:`${customer.name} ${customer.lastName}`,
    email:customer.email,
    address:'NO disponible',
    city:'NO disponible',
    }
    e.preventDefault()
    const newAdmin = {user:{
      email: customer.email,
      admin:true,
    }}

     await dispatch(postNewAdmin(newAdmin))



    setCustomer({
    name: '',
    email: '',
    lastName:'',
    })
    history.push('/user')
  }
  
  return (
    <div className='login'>
            <Link to="/admin/orders"><button className="btnAbout">Volver</button></Link>

    <div className='formContainer'>
      <h1 className='title'>Crear Admin</h1>

      <form  className='form' onSubmit={(e) => handleSubmit(e)}>
        <div>

          <label for="name" className='label'>Name</label>
          <input type="text" 
          required= {true}
          name='name' 
          value={customer.name} 
          id="name"
          placeholder="Nombre" 
          className='input'
          onChange={(e) => handleInput(e)}/>
          

          <label for="lastName" className='label'>Apellidos</label>
          <input type="text" 
          required= {true}
          name='lastName' 
          id="password" 
          value={customer.lastName}
          placeholder="Apellido" 
          className='input'
           onChange={(e) => handleInput(e)}/>

          <label for="email" className='label'>Email</label>
          <input type="email"
          required= {true}
          name='email'
          id="email" 
          value={customer.email}
          placeholder="user@example.com" 
          className='input'
          onChange={(e) => handleInput(e)}/>

          <label for="profile" className='label'>Perfil</label>
          <input type="text" 
          // required= {true}
          name='profile' 
          value={customer.profile} 
          id="profile"
          placeholder="Fotografia" 
          className='input'
          onChange={(e) => handleInput(e)}/>

          
        </div>


        <input type="submit" value="Crear" className='primaryButton'/>
      </form>
    </div>
  </div>
    
  )
}

export default AdminCreateAdmin