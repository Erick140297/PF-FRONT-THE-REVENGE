import React, { useState } from 'react';
import './EditProductForm.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getDetail} from "../../../../Redux/Actions";
import axios from "axios"
import * as yup from 'yup';
import toast from "react-hot-toast";

const EditProductForm = ( props ) => {
  
  const dispatch = useDispatch();
  const history = useHistory()
  const product = useSelector((state) => state.detail);
  const [productBien, setProductBien] =useState({price:"", stock:""});
  const id = props.match.params.id;
  
  const details = useSelector((state) => state.detail);
  


  useEffect(() => {
    dispatch(getDetail(id));
  
    
  }, [dispatch, id]);


  
 



  console.log("PRODDODASODOO", product);

  const handleInputChange = (event) => {
    setProductBien({
      ...productBien,
      [event.target.name]: event.target.value,
    });
  };
console.log("asdasd", productBien);



const handleSave = async (event) => {
  event.preventDefault();
  // Enviar los datos actualizados a tu API para guardarlos en la base de datos
  let isFormValid = true;
    
    // Validaciones
    if (!productBien.price) {
    isFormValid = false;
    toast.error("El precio es un campo obligatorio");
    }
    if (!productBien.stock) {
      isFormValid = false;
      toast.error("El stock es un campo obligatorio");
      }
      if(isFormValid){
        toast.success("Producto editado correctamente, espera un momento..");
  try {
    

     
      
        const updatedProduct = {...product, ...productBien};
  
    
      const response = await axios.put(`https://pf-back-the-revenge-production.up.railway.app/product/${id}`, updatedProduct);
      // Si la respuesta es exitosa, navegar hacia la página de detalles del producto
      history.push("/admin/products");
  
    
  } catch (error) {
      console.error(error);
  }
};}


  return (
    
    <>
    {
      Object.keys(product).length ?(
      <div className='container-md mt-4 mb-4 shadow p-3 mb-4 bg-dark rounded' style={{height: '70%'}}>   
        <div className='edit-image'>
          <img src={product.image.secure_url} alt=""/>
        </div>
        <form className="edit-product-form ">
      <label>
        Precio:
        <input className='ms-2 input-group-text' type="number" value={productBien.price} name="price" onChange={handleInputChange} />
      </label>
      <label>
        Stock:
        <input className='ms-2 input-group-text' type="number" value={productBien.stock} name="stock" onChange={handleInputChange} />
      </label>
      <div className='text-center mt-4'>
        <button className='me-2' onClick={handleSave}>Guardar</button>
        <button type="button" onClick={() => history.push("/admin/products")}>
              Volver
        </button>
      </div>
    </form></div>):
   <h1>HOLA</h1>
}
    </>

  );
  
};

export default EditProductForm;

