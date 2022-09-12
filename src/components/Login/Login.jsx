import React, { useState } from 'react';
import s from './Login.module.css'
import {Field, Form} from 'react-final-form'
import '../../sass/form/form.css'
import loginImg from '../../assets/img/login.jpg'
import { composeValidators, emailCheck, minLength, required, requiredCheckbox } from '../../helpers/validators/validators';

const Login = (props) => {

  return (
    <div>
      <div className={`${s.login} block`}>
        <div className='title'>
          Sign in
        </div>
        <div className={s.body}>
          <LoginForm {...props} />
          <div className={s.img}>
            <img src={loginImg} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginForm = (props) => {
  const onSubmit = (formData) =>{
    props.login(formData)
  }

  return(
     <Form onSubmit={onSubmit} className='loginForm' render={({handleSubmit, form, submitting, pristine, values }) =>(
      <form className='loginForm__body' onSubmit={handleSubmit}>
        <Field name='email' validate={composeValidators(required, emailCheck)}>
          {({input, meta})=> (
            <div className='form__item'>
              <input {...input} type="text" placeholder='Email' className={(meta.error && meta.touched) ? 'form__input form__input_err' : 'form__input'} component={'input'}/>
              {meta.error && meta.touched &&
               <div className='loginForm__errorMessage'><span>{meta.error}</span></div> }
            </div>
          )} 
        </Field>
        <Field name='password' validate={composeValidators(required, minLength(8))}>
          {({input, meta})=> (
            <div className='form__item'>
              <input {...input} type="password" placeholder='Password'
               className={(meta.error && meta.touched) ? 'form__input form__input_err' : 'form__input'} component={'input'}/>
              {meta.error && meta.touched &&
               <div className='loginForm__errorMessage'><span>{meta.error}</span></div> }
            </div>
          )} 
        </Field>
        <Field name='rememberMe' validate={requiredCheckbox} type='checkbox'>
          {({input,checkbox, meta})=> (
            <div className='form__item'>
              <input {...checkbox} {...input} type="checkbox" className={(meta.error) ? 'checkbox__input checkbox__input_err' : 'checkbox__input'} 
              component={'checkbox'} id="loginCheckbox" />
              <label className={(meta.error) ? 'checkbox__label checkbox__label_err' : 'checkbox__label'} for="loginCheckbox">Remember me</label>
            </div>
          )} 
        </Field>
        <div className={props.social.isLoginError ? 'form__item' : 'form__item hidden'}>
          <div className='form__error'>
            Invalid Email or password
          </div>
        </div>

        <div className='form__item'>
          <button type='submit' className='button'>
            Log in
          </button>
        </div>
      </form>
     )}/>    
  );
}

export default Login;

