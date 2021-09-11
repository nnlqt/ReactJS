import React from "react";
import { useInput } from '../../utils/useInput'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpWithFB, loginWithFB } from "../../store/profile/actions";
import { selectProfileError } from "../../store/profile/selectors";
import { Header } from '../Header';
import { Footer } from '../Footer';
import "./style.css";
import { Button, TextField } from "@material-ui/core";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Login = ({ isSignUp }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectProfileError);

  const {
    value: email,
    handleChange: handleChangeEmail,
    reset: resetEmail,
  } = useInput("");

  const {
    value: password,
    handleChange: handleChangePassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    if (isSignUp) {
      dispatch(signUpWithFB(email, password));
    } else {
      dispatch(loginWithFB(email, password));
    }
    resetEmail();
    resetPassword();
  };
  const mob = useMediaQuery("(max-width:600px)");
  if (mob) {
    return (
      <>
      <Header />
      <section className='Login'>
        <form className="Login__form" onSubmit={handleSubmit}>
        <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          <TextField 
          id="outlined-basic"
          label="Enter your email" 
          variant="outlined"
          size='small'
          color='secondary'
          autoFocus={true}
          InputProps = {{ style: {fontSize: '12px'}}}
          InputLabelProps = {{ style: {fontSize: '12px'}}}
            type="text"
            value={email}
            onChange={handleChangeEmail}
          />
          <TextField 
          id="outlined-basic"
          label="Password" 
          variant="outlined"
          size='small'
          color='secondary'
          autoFocus={true}
          InputProps = {{ style: {fontSize: '12px'}}}
          InputLabelProps = {{ style: {fontSize: '12px'}}}
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <Button 
          variant="outlined"
          color='primary'
          style={{fontSize: '10px', textTransform: 'inherit'}}
          type="submit">{`${!isSignUp ? "login" : "signup"}`}</Button>
          {error && <h3>{error}</h3>}
        <Link className='Login__link' to={`${isSignUp ? "/login" : "/signup"}`}>
          {!isSignUp ? "Sign up" : "Login"}
        </Link>
        </form>
        </section>
      <Footer />
      </>
    );
  } else {
  return (
    <>
    <Header />
    <section className='Login'>
      <form className="Login__form" onSubmit={handleSubmit}>
      <h2>{isSignUp ? "Sign up" : "Login"}</h2>
        <TextField 
        id="outlined-basic"
        label="Enter your email" 
        variant="outlined"
        size='small'
        color='secondary'
        autoFocus={true}
          type="text"
          value={email}
          onChange={handleChangeEmail}
        />
        <TextField 
        id="outlined-basic"
        label="Password" 
        variant="outlined"
        size='small'
        color='secondary'
        autoFocus={true}
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <Button 
        variant="outlined"
        color='primary'
        style={{textTransform: 'inherit'}}
        type="submit">{`${!isSignUp ? "login" : "signup"}`}</Button>
        {error && <h3>{error}</h3>}
      <Link className='Login__link' to={`${isSignUp ? "/login" : "/signup"}`}>
        {!isSignUp ? "Sign up" : "Login"}
      </Link>
      </form>
      </section>
    <Footer />
    </>
  );
  }
};