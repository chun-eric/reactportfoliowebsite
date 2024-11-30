import { useState } from "react";
import "./contact2.css";
import axios from "axios";

const Contact3 = () => {
  // first check env variables
  if (!import.meta.env.VITE_APP_FORM_ID) {
    throw new Error("Missing Formspree endpoing ID in environment");
  }

  // store env variable into a const
  const FORM_ENDPOINT = import.meta.env.VITE_APP_FORM_ID;

  // Intialize all state variables
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  }); // tracks what users type in each form field, easier in object state as we can group it one group
  const [loading, setLoading] = useState(false); // tracks if form is submitting or not. Its either loading or not. Initially it is not loading so it is false. 
  const [submitted, setSubmitted] = useState(false); // tracks if form is submitted or not. Initially not submitted so it is false
  const [errors, setErrors] = useState({}); // tracks validation errors for each field. Initial value is empty object because each filed can have its own error message. 
 /*
  example
 {
   name: "Name is required",
   email: "Invalid email format",
   message: "Message too short",
   submit: 
 
 }
 
 */
  

  return <div>Contact3</div>;
};

export default Contact3;
