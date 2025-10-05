import { useState } from "react";
import "./contact2.css";
import axios from "axios";

const Contact4 = () => {
  if (!import.meta.env.VITE_APP_FORM_ID) {
    throw new Error("Missing Formspree endpoint ID in environment variables");
  }

  const FORM_ENDPOINT = import.meta.env.VITE_APP_FORM_ID;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // Name validation
    if (!inputs.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (inputs.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
      tempErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    // destructure the name and value
    const { name, value } = e.target;
    // update the input state
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios({
        method: "POST",
        url: `https://formspree.io/f/${FORM_ENDPOINT}`,
        data: inputs,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSubmitted(true);
        setInputs({ name: "", email: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit form. Please try again.",
      }));
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
                  type='text'
                  name='name'
                  value={inputs.name}
                  onChange={handleInputChange}
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
                  type='email'
                  name='email'
                  value={inputs.email}
                  onChange={handleInputChange}
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
                <textarea
                  id='message'
                  name='message'
                  className={`textarea ${errors.message ? "error-input" : ""}`}
                  value={inputs.message}
                  onChange={handleInputChange}
                />
                {errors.message && (
                  <span className='error-message'>{errors.message}</span>
                )}
              </div>
              {errors.submit && (
                <div className='error-message submit-error'>
                  {errors.submit}
                </div>
              )}
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
