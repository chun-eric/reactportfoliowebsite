import "./contact2.css";

import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";

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
    setEmail(e.target.value);
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
    setLoading(true);
    await handleSubmit(e);
    setLoading(false);
    setSubmitted(true);
  };

  // reseting the form
  const handleFormReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  if (submitted) {
    setSubmitted(state.succeeded);
    return (
      <div className='form-submitted'>
        <p>Success! I'll get back to you soon!</p>
        <button onClick={handleFormReset}>Go Back</button>
      </div>
    );
  }

  return (
    <section id='contact' className='contact section-padding'>
      <div className='main-container'>
        <div className='contact-heading'>
          <h2>
            <span className='heading-sec__main heading-sec__main--lt'>
              Contact Me
            </span>
            <span className=' heading-contactme'>
              Feel free to Contact me by submitting the form below and I'll get
              back to you as soon as I can.
            </span>
          </h2>
        </div>
        <div className='form-submitted'>
          <p>
            <span className='thank-you-span'>Thank you</span> for your message!{" "}
            <br />
            I'll get back to you soon as I can. 
          </p>
          <button onClick={handleFormReset} className='go-back-button'>
            Go Back
          </button>
        </div>
        <div className='contact__form-container'>
          <form onSubmit={handleFormSubmit} className='contact__form'>
            <div className='form-section'>
              <label htmlFor='name' className='label'>
                First Name
              </label>
              <input
                id='name'
                type='name'
                name='name'
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
                className='textarea-'
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
              {loading ? <span className='spinner'></span> : "Submit"}
            </button>
            <span className='spinner'></span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
