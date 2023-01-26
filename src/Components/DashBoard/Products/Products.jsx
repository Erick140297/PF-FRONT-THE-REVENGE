
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { cleanResult, GetAllProducts } from "../../../Redux/Actions"
import styles from "./Products.css"
import NewProductForm from "./NewProduct/NewProductForm";
import { Link } from "react-router-dom"





const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  console.log("Infoooo", allProducts);


  useEffect(() => {
    dispatch(GetAllProducts());
    dispatch(cleanResult())
    return () => {
      
    };
  }, []);

  const handleDelete = (productId) => {
    if(window.confirm("Estás seguro de que quieres eliminar este producto?")){
        
    }
};

// const deleteProduct = async (cartId, productId) => {
//   await axios.delete("http://localhost:3001/shoppingCart", {
//     data: { cartId, productId },
//   });
//   toast.success("Producto eliminado del carrito");
//   dispatch(getCart(user.email));
// };



    return (
      <>
      <div>
      <Link to="/admin/products/form"><h4> CREAR PRODUCTO</h4></Link>    
      
      </div>
      <table className="product-table">
        
        <div className="form">
          
        </div>
      <thead>
          <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Acciones</th>
          </tr>
      </thead>
      <tbody>
          {allProducts.map(product => (
              <tr key={product.id}>
                  <td>{product.name}</td>
                  <td><img src={product.image.secure_url} alt={product.name} className="product-image"/></td>                  
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.category}</td>
                  <td>
                      <button className="edit-button">Editar</button>
                      <button className="delete-button" onClick={()=> handleDelete(product.id)}>Eliminar</button>
                  </td>
              </tr>
          ))}
      </tbody>
  </table>
  </>);
};

export default Products;