import React, { useState } from 'react';
import './EditProductForm.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { getDetail} from "../../../../Redux/Actions";
import axios from "axios"
const EditProductForm = ( props ) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const product = useSelector((state) => state.detail);
  const [productBien, setProductBien] =useState({price:"", stock:""});
  const id = props.match.params.id;
  const [productLoaded, setProductLoaded] = useState(false);
  const details = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(id));
    setProductLoaded(true);
    
  }, []);


  
 



  console.log("AOSDOASNOD", product);

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
  const updatedProduct = {...product, ...productBien};
  try {
      const response = await axios.put(`http://localhost:3001/product/${id}`, updatedProduct);
      // Si la respuesta es exitosa, navegar hacia la página de detalles del producto
      history.push("/admin/products");
  } catch (error) {
      console.error(error);
  }
};


  return (
    
    <>
    {
      productLoaded?(<div> 
        
        <div className='edit-image'>
          <img src={details.image.secure_url} alt=""/>
        </div>
        
        <form className="edit-product-form">
        
      <label>
        Precio:
        <input type="number" value={productBien.price} name="price" onChange={handleInputChange} />
      </label>
      <label>
        Stock:
        <input type="number" value={productBien.stock} name="stock" onChange={handleInputChange} />
      </label>
      <button onClick={handleSave}>Guardar</button>
      <button type="button" onClick={() => history.push("/admin/products")}>
            Volver
          </button>
    </form></div>):
   <h1>HOLA</h1>
}
    </>

  );
  
};

export default EditProductForm;

