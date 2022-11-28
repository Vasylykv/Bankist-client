import React, { FC, useContext } from 'react';
import { useFormik } from 'formik';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

import './loginPage.css';

interface Values {
  login: string,
  password: string
}

const LoginPage: FC = () => {
  const { store } = useContext(Context);

  const formik = useFormik<Values>({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: ({login, password}) => {
      store.login(login, password);
    }
  });

  

  return (
    <div className='container'>
      {/* <div className='header'>
        <h3>Log in to get started</h3>
        <img src="icons/logo.png" alt="Logo" className="logo" />
      </div> */}
        <form className='login-form' onSubmit={formik.handleSubmit}>
          <img src="icons/logo.png" alt="Logo" className="logo" />
          <h3>Log in to get started</h3>
          <div className='inputBox'>
            <input id="login" 
              name="login" 
              type="text" 
              required 
              className='login__input' 
              onChange={formik.handleChange}
              value={formik.values.login} />
            <span>Username</span>
          </div>

          <div className='inputBox'>
            <input id="password" 
              name="password" 
              required 
              type="password" 
              className='login__input' 
              onChange={formik.handleChange}
              value={formik.values.password}/>
            <span>Password</span>
          </div>

          <button type="submit" className='login__btn'>Enter</button>
        </form>
  </div>
  );
};

export default observer(LoginPage);