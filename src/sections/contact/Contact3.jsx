import { useState } from "react";
import "./contact2.css";
import axios from "axios";

// Practice Component
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
   submit: "Server error occurred "
 
 }

 */

  // handle functions
  // 1. handle input change on the form fields
  const handleChange = (e) => {
    // destructures name and value
    // e.g name="name" value="eric"
    const { name, value } = e.target;

    // update input state with new value
    setInputs((prev) => ({ ...prev, [name]: value }));

    // if errors exist update errors state and clear them
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // 2. handle form validation
  const validateForm = () => {
    // empty object to store errors
    let tempErrors = {};
    // assume form is valid to start. It is like a checklist for us to track. If true that means all validation is good.
    let isValid = true;

    // Name validation
    if (!inputs.name.trim()) {
      // .name is added dynamically to the tempErrors object
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (inputs.name.length < 2) {
      tempErrors.name = "Name is too short. Must be greater than 2 characters";
      isValid = false;
    }

    // Email validation
    /*
    / = start of the regex
    ^ = start of the string

    [^\s@] = any character except space and @
    + = one or more ( this is for the local part of the email address )

    @ = @ symbol

    [^\s@]+ = any character except space and @  for one or more ( this is for the domain name of the email address )

    \. = the dot


    [^\s@]+ = any character except space and @  for one or more ( this is for the top level domain name of the email address eg com, net, org)

    $ = end of the string

    / = end of the regex
    */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex for email validation/

    if (!inputs.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(inputs.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!inputs.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (inputs.message.length < 10) {
      tempErrors.message =
        "Message is too short. Must be greater than 10 characters";
      isValid = false;
    }

    // Update errors and return isValid.
    setErrors(tempErrors);
    return isValid;
  };

  // 3. Handle Form Submissions
  const handleFormSubmit = async (e) => {
    // prevent default form submission
    e.preventDeault();
    // set loading state to true
    setLoading(true);

    // checks if form is valid
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    // try catch finally block to send form data, catch errors and finally set loading to false to default state
    try {
      // submit the form and save it into a variable called response
      const response = await axios({
        method: "POST",
        url: `https://formspree.io/f/${FORM_ENDPOINT}`,
        data: inputs,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // if response status is 200 success
      if (response.status === 200) {
        // set submitted state to true
        setSubmitted(true);
        // reset inputs state to empty object
        setInputs({
          name: "",
          email: "",
          message: "",
        });
        // reset errors state to empty object
        setErrors({});
      }
    } catch (error) {
      // console.log the error
      console.log("Form submission error:", error);
      // update errors state
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again",
      }));
    } finally {
      setLoading(false);
    }
  };

  // 4. Handle Refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section id='contact'>
      {submitted ? (
        // form submitte message and reset button
        <div className='form-submitted'>
          <p>
            <span className='thank-you-span'>Thank you</span> for your message!
            <br />
            I'll get back to you as soon as possible.
          </p>
          <button
            className='form-reset'
            style={{
              backgroundColor: "#202730",
              color: "white",
            }}
            onClick={handleRefresh}
          ></button>
        </div>
      ) : (
        // original contact form
        <div className='main-container contact-form'>
          {/* Heading */}
          <div className='contact-heading'>
            <h2>
              <span className='heading-sec__main heading-sec__main--lt contact me'>
                Contact Me
              </span>
            </h2>
            <p className='heading-container'>
              Feel free to contact me. I'll get back to you as soon as possible.
            </p>
          </div>
          {/* Form */}
          <div className='contact__form-container'>
            <form onSubmit={handleFormSubmit} className='contact__form'>
              <div className='form-section'>
                <label htmlFor='name' className='label'>
                  First Name
                </label>
                <input
                  id='name'
                  name='name'
                  value={inputs.name}
                  type='text'
                  onChange={handleChange}
                  className={errors.name ? "error-input" : ""}
                />
                {errors.name && (
                  <span className='error-message'>{errors.name}</span>
                )}
              </div>
              <div className='form-section'>
                <label htmlFor='email' className='label'>
                  Email Address
                </label>
                <input
                  id='email'
                  type='text'
                  name='email'
                  value={inputs.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && (
                  <span className='error-message'>{errors.email}</span>
                )}
              </div>
              <div className='form-section'>
                <label htmlFor='message' className='label'>
                  Message
                </label>
                <input
                  id='message'
                  name='message'
                  value={inputs.message}
                  onChange={handleChange}
                  type='text'
                  className={`textarea ${errors.message ? "error-input" : ""}`}
                />
                {errors.message && (
                  <span className='error-message'>{errors.message}</span>
                )}
              </div>
              {errors.submit && (
                <div className='submit-error error-message'>
                  {errors.submit}
                </div>
              )}
              <button
                type='submit'
                disabled={loading}
                className='submit-button'
              >
                {loading ? <span className='spinner'></span> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact3;
