import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillPencilFill, BsEnvelope, BsTelephoneInbound } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import "./ProfileSettings.css";
import { updateProfile } from '../../Redux/Actions'

const ProfileSettings = () => {
  const { user } = useAuth0();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('');
  const dispatch = useDispatch();
  const { error, isUpdated, loading } = useSelector(state => state.user);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.picture);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if(isUpdated) {
      alert.success('user updated successfully!');
      dispatch({
        type: "UPDATE_PROFILE_RESET"
      });
    }
  }, [dispatch, alert, error, isUpdated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set('name', name);
    formData.set('email', email);
    formData.set('avatar', avatar);

    dispatch(updateProfile(formData));
  }

  const onChange = e => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
      <div className='col-10 col-lg-5'>
        <div className="div">
          <h1> <AiFillAppstore /> account settings </h1>
          <div className='form=group'>
            <label htmlFor='avatar_upload'>Avatar</label>
            <div className='d-flex align-items-center'>
              <div>
                <figure className='avatar mr-3 item-rtl'>
                  <img
                    src={avatarPreview}
                    className='rounded-circle'
                    alt='Avatar Preview'
                  />
                </figure>
              </div>
              <div className="custom-file">
                <input
                  type='file'
                  name='avatar'
                  className='custom-file-input'
                  id='customFile'
                  accept='image/*'
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        <h2> personal information: </h2>
          <form className='shadow-lg' onSubmit={submitHandler} encType='multipart/form-data'>
            <div className='form=group'>
              <label htmlFor='email_field'>Name</label>
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
              <label htmlFor='email_field'>Email</label>
              <input
                type='email'
                id='email_field'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form=group'>
              <label htmlFor='addres_field'>Address</label>
              <input
                type='addres'
                id='addres_field'
                className='form-control'
                name='addres'
                value={user.address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
              <button type='submit' className='btn update-btn btn-block mt-4 mb-3'
                disabled={loading ? true : false}> Update </button>
            </form>
            <Link to={"/profile"}>
              <button className="button"> go back </button>
            </Link>
          </div>
      </div>
  );
};

export default ProfileSettings;