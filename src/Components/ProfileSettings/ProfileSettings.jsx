import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { updateProfile, getInfoUser } from '../../Redux/Actions'
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
 
  const info = useSelector((state) => state.Admin);

  useEffect(() => {
    dispatch(getInfoUser(user.email));

    if (info) {
      setName(info.name);
      setCity(info.city);
      setAddress(info.address);
      setPhone(info.phone);
    }
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('city', city);
    formData.set('address', address);
    formData.set('phone', phone);

    dispatch(updateProfile(formData));
    console.log(name, city, address, phone);
  }

  return (
    <div className="div">
      <h2> personal information: </h2>
      <form onSubmit={submitHandler}>
        <div className='form=group'>
          <label> Nombre: </label>
              <input
                type='name'
                id='name_field'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
        </div>
        <div className='form=group'>
              <label htmlFor='email_field'> Ciudad: </label>
              <input
                type='city'
                id='city'
                className='form-control'
                name='city'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
        </div>
        <div className='form=group'>
              <label htmlFor='addres_field'> Dirección: </label>
              <input
                type='addres'
                id='addres_field'
                className='form-control'
                name='addres'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
        </div>
        <div className='form=group'>
              <label htmlFor='addres_field'> Telefóno: </label>
              <input
                type='addres'
                id='addres_field'
                className='form-control'
                name='addres'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
        </div>
        <button type='submit' className='btn update-btn btn-block mt-4 mb-3' onSubmit={submitHandler}> Update </button>
      </form>
      <Link to={"/profile"}>
        <button className="button"> go back </button>
      </Link>
    </div>
  );
};

export default ProfileSettings;