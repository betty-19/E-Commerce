// Updated SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import SignUpPic from '../../assets/images/signup-login.jpg';
import { FcGoogle } from 'react-icons/fc';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firease';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const nav = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').matches(/^[A-Za-z\s]+$/, 'Name must contain only letters'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(8, 'Minimum 8 characters').required('Password is required')
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        console.log('User created:', userCredential.user);
        nav('/login');
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setErrors({ email: 'Email already in use' });
        } else if (error.code === 'auth/weak-password') {
          setErrors({ password: 'Password should be at least 8 characters' });
        } else {
          alert('Something went wrong: ' + error.message);
        }
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="signup-wrapper">
      <div className="signup-img">
        <img src={SignUpPic} alt="Signup" />
      </div>
      <div className="signup-content">
        <div className="signup-texts">
          <p>Create an account</p>
          <p>Enter your details below</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="name-field">
            <input type="text" name="name" placeholder="Name" value={formik.values.name} onChange={formik.handleChange} />
           
          </div> {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}
          <div className="email-field">
            <input type="email" name="email" placeholder="Email or Phone Number" value={formik.values.email} onChange={formik.handleChange} />
            
          </div>{formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}
          <div className="password-field">
            <input type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
           
          </div> {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}
          <button className='create-account' type="submit">Create Account</button>
        </form>
        <div className="signup-with-google">
          <FcGoogle size={24} />
          <p>Sign up with Google</p>
        </div>
        <div className='have-account'>
          <p>Already have an account</p>
          <p onClick={()=>nav('/login')}>Log in</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
