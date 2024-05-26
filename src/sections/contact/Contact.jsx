import "./contact.css";

import { ValidationError, useForm } from "@formspree/react";

/* Form Submission and Error Handling */
// const emailInput = document.getElementById("email");
// const emailError = document.getElementById("email-error");
// const emailSuccess = document.getElementById("email-success");
// const form = document.getElementById("form");
// const submitButton = document.getElementById("submit--button");

// console.log(form);

// // remove error styling
// function removeError() {
//   emailError.innerHTML = "";
//   emailInput.style.borderBottomColor = "transparent";
// }

// // remove success styling
// function removeSuccess() {
//   emailSuccess.innerHTML = "";
//   emailInput.style.borderBottomColor = "transparent";
// }

// // clearing all inputs
// function clearAll() {
//   form.reset();
// }

// // validating email
// function validateEmail() {
//   if (
//     !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
//   ) {
//     emailError.innerHTML = "Please enter a valid email.";
//     emailError.style.top = "120%";
//     emailInput.style.borderBottomColor = "red";
//     removeSuccess();

//     if (emailInput.value == "") {
//       removeError();
//       return true;
//     }
//     return false;
//   }
//   emailSuccess.innerHTML = "Success!";
//   emailSuccess.style.top = "120%";
//   emailInput.style.borderBottomColor = "rgb(64, 179, 11)";
//   removeError();
//   return true;
// }

// // changing button effect when clicked
// submitButton.addEventListener("click", () => {
//   // adding a button effect
//   submitButton.classList.add("submit--btn");
// });

// // clear all form fields after submit
// window.onbeforeunload = () => {
//   for (const form of document.getElementsByTagName("form")) {
//     form.reset();
//   }
// };

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("xqkolwqa");

  // for the form submitting state
  if (state.submitting) {
    return <p>Submitting...</p>;
  }

  if (state.succeeded) {
    return (
      <div>
        <p>Thanks!</p>;<button onClick={reset}>Reset</button>
      </div>
    );
  }

  //

  return (
    <section id='contact' className='contact section-padding'>
      <div
        className='main-container'
        // data-aos='fade-up'
        // data-aos-delay='150'
        // data-aos-offset='200'
        // data-aos-duration='1200'
        // data-aos-easing='ease-in-out'
      >
        <h2 className='heading-sec__mb-med'>
          <span className='heading-sec__main heading-sec__main--lt'>
            Contact Me
          </span>
          <span className='heading-sec__sub--lt heading-sec__sub'>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </span>
        </h2>

        <div className='contact__form-container'>
          <form onSubmit={handleSubmit}>
            {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
            <input type='hidden' name='_subject' value='New Email Yay!' />
            <div className='contact__form-field'>
              <label className='contact__form-label' htmlFor='name'>
                Name
              </label>
              <input
                required
                className='contact__form-input'
                placeholder='Enter your name'
                type='text'
                name='name'
                id='name'
              />
              <ValidationError
                field='name'
                prefix='Name'
                errors={state.errors}
              />
            </div>
            <div className='contact__form-field' id='email-input-group'>
              <label className='contact__form-label' htmlFor='email'>
                Email
              </label>
              <input
                required
                className='contact__form-input'
                id='email'
                placeholder='Enter your email'
                type='text'
                name='email'
                spellCheck='false'
              />
              <ValidationError
                field='email'
                prefix='Email'
                errors={state.errors}
              />
              <span id='email-error'></span>
              <span id='email-success'></span>
            </div>
            <div className='contact__form-field'>
              <label className='contact__form-label' htmlFor='message'>
                Message
              </label>
              <textarea
                required
                name='message'
                cols='30'
                rows='10'
                placeholder='Enter your message'
                className='contact__form-input'
                id='message'
              ></textarea>
              <ValidationError
                field='message'
                prefix='Message'
                errors={state.errors}
              />
            </div>
            <button
              disabled={state.submitting}
              type='submit'
              id='submit--button'
              className='btn btn--theme submit--btn'
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
