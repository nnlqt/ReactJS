import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";
import { Header } from '../Header';
import { Footer } from '../Footer';
import './style.css';
import { Button, TextField } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Profile = ({ classes }) => {
  const [value, setValue] = useState("");
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const mob = useMediaQuery("(max-width:600px)");
  if (mob) {
    return (
      <>
      <Header />
      <div className='Profile center'>
        <form className='Profile__form' action="" onSubmit={handleSubmit}>
          <h3 className='Profile__h3'>This if profile of {name}</h3>
          <TextField 
          id="outlined-basic"
          label="Enter your name" 
          variant="outlined"
          size='small'
          color='secondary'
          autoFocus={true}
          InputProps = {{ style: {fontSize: '12px'}}}
          InputLabelProps = {{ style: {fontSize: '12px'}}}
          value={value} onChange={handleChange} />
          <Button 
          variant="outlined"
          color='primary' 
          style={{fontSize: '10px', textTransform: 'inherit'}}
          onClick={handleSubmit}>
          Save name</Button>
        </form>
      </div>
      <Footer />
      </>
    );
  } 

  else {

  return (
    <>
    <Header />
    <div className='Profile center'>
      <form className='Profile__form' action="" onSubmit={handleSubmit}>
        <h3 className='Profile__h3'>This if profile of {name}</h3>
        <TextField 
        id="outlined-basic"
        label="Enter your name" 
        variant="outlined"
        size='small'
        color='secondary'
        autoFocus={true}
        value={value} onChange={handleChange} />
        <Button 
        variant="outlined"
        color='primary'
        style={{ textTransform: 'inherit' }} 
        onClick={handleSubmit}>
        Save name</Button>
      </form>
    </div>
    <Footer />
    </>
  );
  }
};

export default Profile;