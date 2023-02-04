import React, { useState } from "react";
import styles from "./NewProductForm.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { GetAllProducts } from "../../../../Redux/Actions";
import toast from "react-hot-toast";
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
    toast.success("Producto creado, espera un momento..");
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://pf-back-the-revenge-production.up.railway.app/product",
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
      <button type="button"  className="btn btn-dark btn-lg mb-0 text-center mt-4" onClick={() => history.push("/admin/products")}>
        Volver
      </button>
      {isOpen && (
        <div className="d-md-flex justify-content-md-center mb-5">
          <form
            className="new-product-form mt-0 mb-5 bg-dark text-light"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h3 className="text-center fs-4 mt-2 mb-4">Formulario de Creación</h3>
            <div className="mb-3">
              <label htmlFor="exampmControlInput1" className="form-label">Nombre</label>
              <input type="email" className="form-control bg-dark text-light" placeholder="escribe un nombre" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Precio</label>
              <input type="number" className="form-control bg-dark text-light" placeholder="0"
                name="price"
                value={formData.price}
                onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Imágen</label>
              <input type="file" className="form-control bg-dark text-light" onChange={(el) => handleImage(el)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Marca</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="escribe una marca" 
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Stock</label>
              <input type="number" className="form-control bg-dark text-light" placeholder="0" 
                name="stock"
                value={formData.stock}
                onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Categoría</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="escribe una categoria"  
                name="category"
                value={formData.category}
                onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Subcategoría</label>
              <input type="text" className="form-control bg-dark text-light" placeholder="escribe una subcateria"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Descripción</label>
              <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea1" rows="3" placeholder="escribe aqui ..."  
                name="description"
                value={formData.description}
                onChange={handleInputChange}/>
            </div>
            {/* <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Crear</button> */}
            <div className="text-center mt-5 d-md-flex justify-content-md-center">
              <button type="submit" className="btn btn-primary btn-lg mb-3 text-center" onClick={(e)=>{handleSubmit(e)}}>Crear</button>
            </div>
            {/* <form onSubmit={(el) => handleSubmit(el, image, input)}></form> */}
          </form>
        </div>
      )}
    </div>
  );
};
export default NewProductForm;
