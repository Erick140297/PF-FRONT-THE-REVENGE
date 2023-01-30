import React, { useState } from "react";
import styles from "./NewProductForm.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GetAllProducts } from "../../../../Redux/Actions";
import { useHistory } from "react-router-dom";
const NewProductForm = (props) => {
    const history = useHistory()
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    subCategory: "",
    brand: "",
    stock: 0,
  });

  const [image, setImage] = useState(null);
  const handleImage = (el) => {
    setImage(el.target.files[0]);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const infoFormData = new FormData();
  infoFormData.append("name", formData.name);
  infoFormData.append("image", image);
  infoFormData.append("price", formData.price);
  infoFormData.append("brand", formData.brand);
  infoFormData.append("stock", formData.stock);
  infoFormData.append("description", formData.description);
  infoFormData.append("category", formData.category);
  infoFormData.append("subCategory", formData.subCategory);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://pf-back-the-revenge-production.up.railway.app/",
        infoFormData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setFormData({
        name: "",
        price: 0,
        description: "",
        category: "",
        subCategory: "",
        brand: "",
        stock: 0,
      }),
      setImage(null),
      history.push("/admin/products")
      // Manejar la respuesta del servidor
    } catch (error) {
      // Manejar el error
    }
  };

  return (
    <div>
    
      {isOpen && (
        <form
          className="new-product-form"
          onSubmit={(event) => handleSubmit(event)}
        >
          {/* <form onSubmit={(el) => handleSubmit(el, image, input)}></form> */}
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Imágen:
            <input type="file" onChange={(el) => handleImage(el)} />
          </label>

          <label>
            Marca:
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Descripción:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Stock:
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Categoría:
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Subcategoría:
            <input
              type="text"
              name="subCategory"
              value={formData.subCategory}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Crear</button>
          <button type="button" onClick={() => history.push("/admin/products")}>
            Volver
          </button>
        </form>
      )}
    </div>
  );
};
export default NewProductForm;
