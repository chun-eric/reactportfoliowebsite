import "./contact2.css";

import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";

const Contact = () => {
  // const [state, handleSubmit] = useForm("xqkolwqa");
  // const [email, setEmail] = useState("");

  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORM_ID);

  if (state.succeeded) {
    return <p>Success! Thank you.</p>;
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
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible.
            </span>
          </h2>
        </div>
        <div className='contact__form-container'>
          <form onSubmit={handleSubmit} className='contact__form'>
            <div className='form-section'>
              <label htmlFor='name' className='label'>
                First Name
              </label>
              <input id='name' type='name' name='name' />
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
              <input id='email' type='email' name='email' />
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
              <textarea id='message' name='message' className='textarea-' />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            <button
              type='submit'
              disabled={state.submitting}
              className='submit-button'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
