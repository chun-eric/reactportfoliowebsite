import "./contact2.css";
import { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";

const Contact3 = () => {
  // Use your actual Formspree form ID directly here for testing
  const [state, handleSubmit] = useForm(import.meta.env.VITE_APP_FORM_ID);
  const [loading, setLoading] = useState(false);

  // Simplified form submission handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await handleSubmit(e);
    } finally {
      setLoading(false);
    }
  };

  if (state.succeeded) {
    return (
      <div className='form-submitted'>
        <p>
          <span className='thank-you-span'>Thank you</span> for your message!
          <br />
          I&apos;ll get back to you soon as I can.
        </p>
        <button
          style={{ backgroundColor: "#202730", color: "white" }}
          onClick={() => window.location.reload()}
          className='form-reset'
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <section id='contact'>
      <div className='main-container contact-form'>
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

        <div className='contact__form-container'>
          <form onSubmit={handleFormSubmit} className='contact__form'>
            <div className='form-section'>
              <label htmlFor='name' className='label'>
                First Name
              </label>
              <input id='name' type='text' name='name' />
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
              <textarea id='message' name='message' className='textarea' />
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

export default Contact3;
