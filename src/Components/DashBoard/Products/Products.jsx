
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { cleanResult, GetAllProducts } from "../../../Redux/Actions"
import styles from "./Products.css"
import NewProductForm from "./NewProduct/NewProductForm";
import { Link, useHistory } from "react-router-dom"





const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const history = useHistory();

  const [selectedCategory, setSelectedCategory] = useState('Todas');
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
const handleCategoryChange = (e) => {
  setSelectedCategory(e.target.value);
};

const filteredProducts = selectedCategory === 'Todas'
  ? allProducts
  : allProducts.filter(product => product.category === selectedCategory);



    return (
      <>
      <div className="mt-4">
        <button className="btn btn-dark text-light shadow p-3 rounded" type="button" onClick={() => history.push("/dashboard")}>
              Volver
        </button>
        <div className="row">
        <div className="text-start w-100">
          <Link to="/admin/products/form"><h4 className="crear-button mb-2 text-center"> CREAR PRODUCTO</h4></Link>    
        </div>

        <div>
          <select className="form-select w-25 mb-4 mt-2 bg-dark text-light" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="Todas">Todas</option>
            <option value="componentes de pc">Componentes de PC</option>
            <option value="perifericos">Periféricos</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="laptops">Laptops</option>
          </select>
        </div>
      

        </div>
      </div>
      <table className="product-table shadow p-3 mb-4 bg-dark rounded">
        
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
            {filteredProducts.map(product => (
              <tr key={product._id}>
                <td><img src={product.image.secure_url} alt={product.name} className="product-image" /></td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>
                  <Link to={`/admin/products/edit/${product._id}`}>
                    <button className="edit-button">Editar</button>
                  </Link>
                  <br />
                  <button className="delete-button mt-1" onClick={() => handleDelete(product.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
  </table>
  </>);
};

export default Products;