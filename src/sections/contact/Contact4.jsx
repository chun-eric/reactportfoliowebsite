import { useState } from "react";
import "./contact2.css";
import { ValidationError, useForm } from "@formspree/react";
import axios from "axios";

const Contact4 = () => {
  if (!import.meta.env.VITE_APP_FORM_ID) {
    throw new Error("Missing Formspree endpoint ID in environment variables");
  }

  const FORM_ENDPOINT = import.meta.env.VITE_APP_FORM_ID;
  const [state, handleSubmit] = useForm(FORM_ENDPOINT);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNameChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleEmailChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleMessageChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      message: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios({
        method: "POST",
        url: `https://formspree.io/f/${FORM_ENDPOINT}`,
        data: inputs,
      });

      if (response.status === 200) {
        setSubmitted(true);
        setInputs({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section id='contact'>
      {submitted ? (
        <div className='form-submitted'>
          <p>
            <span className='thank-you-span'>Thank you</span> for your message!{" "}
            <br />
            I'll get back to you soon as I can.
          </p>
          <button
            style={{ backgroundColor: "#202730", color: "white" }}
            onClick={handleRefresh}
            className='form-reset'
          >
            Refresh Page
          </button>
        </div>
      ) : (
        <div className='main-container contact-form'>
          <div className='contact-heading'>
            <h2>
              <span className='heading-sec__main heading-sec__main--lt contact-me'>
                Contact Me
              </span>
            </h2>
            <p className='heading-contactme'>
              Feel free to Contact me by submitting the form below and I'll get
              back to you as soon as I can.
            </p>
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
                  value={inputs.name}
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
                  value={inputs.email}
                  onChange={handleEmailChange}
                  required
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
                  value={inputs.message}
                  onChange={handleMessageChange}
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
              </div>
              <button
                type='submit'
                disabled={loading}
                className='submit-button'
              >
                {loading ? <span className='spinner'></span> : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact4;
