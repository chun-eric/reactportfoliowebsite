import "./contact2.css";
import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";
// import axios from "axios";

const Contact = () => {
  // formspree form state
  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORM_ID);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // handle name input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // handle message input changes
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // function to handle form submissions
  const handleFormSubmit = async (e) => {
    // prevent default form submission
    e.preventDefault();

    // starts the loading state
    setLoading(true);

    // debug log
    console.log("Form submission started");

    // submit the form and save it into a variable
    await handleSubmit(e);

    if (state.succeeded) {
      // set the submitted state to true
      setSubmitted(true);
    }

    setLoading(false);
    console.log("Form submitted successfully");

    handleFormReset();
  };

  // reseting the form function handler
  const handleFormReset = () => {
    // reset name
    setName("");

    // reset email
    setEmail("");

    // reset message
    setMessage("");

    // reset form submission state to show form again
    setSubmitted(false);

    // redirect me back to the form
  };

  // handle function for page refresh
  const handleRefresh = () => {
    window.location.reload();
  };

  // shows new container when form is submitted successfully
  if (state.succeeded) {
    return (
      <div className='form-submitted'>
        <p>
          <span className='thank-you-span'>Thank you</span> for your message!{" "}
          <br />
          I&apos;ll get back to you soon as I can.
        </p>
        <button
          style={{ backgroundColor: "#202730", color: "white" }}
          onClick={handleRefresh}
          className='form-reset'
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <section id='contact'>
      <div className={`main-container contact-form `}>
        <div className='contact-heading'>
          <h2>
            <span className='heading-sec__main heading-sec__main--lt contact-me'>
              Contact Me
            </span>
          </h2>
          <p className='heading-contactme'>
            Feel free to Contact me by submitting the form below and I&apos;ll
            get back to you as soon as I can.
          </p>
        </div>

        <div className={`contact__form-container `}>
          <form onSubmit={handleFormSubmit} className='contact__form'>
            <div className='form-section'>
              <label htmlFor='name' className='label'>
                First Name
              </label>
              <input
                id='name'
                type='name'
                name='name'
                value={name}
                onChange={handleNameChange}
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
              />
            </div>
            <div className='form-section'>
              <label htmlFor='email' className='label'>
                Email Address
              </label>
              <input
                id='email'
                type='email'
                name='email'
                value={email}
                onChange={handleEmailChange}
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
            </div>
            <div className='form-section'>
              <label htmlFor='message' className='label'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='textarea'
                value={message}
                onChange={handleMessageChange}
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              type='submit'
              disabled={state.submitting || loading}
              className='submit-button'
            >
              {loading ? <span className='spinner'></span> : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
