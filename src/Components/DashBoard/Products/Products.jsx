
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { cleanResult, GetAllProducts } from "../../../Redux/Actions"
import styles from "./Products.css"
import NewProductForm from "./NewProduct/NewProductForm";
import { Link } from "react-router-dom"
import  { useState } from 'react';




const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const allProducts = useSelector((state) => state.allProducts);


  console.log("IFFFFF", allProducts);
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'Todas'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <>
    <div>
      <Link to="/admin/products/form"><h4> CREAR PRODUCTO</h4></Link>    
      
      </div>
      <div>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="Todas">Todas</option>
          <option value="componentes de pc">Componentes de PC</option>
          <option value="perifericos">Periféricos</option>
          <option value="mantenimiento">Mantenimiento</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
      
      <table className="product-table">
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
                <button className="delete-button" onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;