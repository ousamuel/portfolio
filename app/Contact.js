'use client'
import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/sendgrid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message })
    });

    const data = await res.json();

    if (data.error) {
      console.error(data.error);
    } else {
      setEmail('');
      setMessage('');
      console.log('Message sent!');
    }
  };

  
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Username is a required field")
      .min(5, "Username must be at least 5 characters"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters"),
    confirm: Yup.string()
      .required("Password must match")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: schema,
  });
  return (
    <form onSubmit={handleSubmit} className='text-black'>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
