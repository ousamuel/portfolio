'use client'
import { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Link,
  NextUIProvider,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
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
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    message: Yup.string()
      .required("Message is a required field"),
  });
  const formik = useFormik({
    initialValues: {
      email: email,
      message: message,
    },
    validationSchema: schema,
  });
  return (
    <form onSubmit={handleSubmit} className='text-black'>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your message"></textarea>
      <Button type="submit">Send</Button>
    </form>
  );
}
