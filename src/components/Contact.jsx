import "../styles/contact.css";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Contact() {
  const [validEmail, setValidEmail] = useState(false);

  // Handling the changing of forms inputs
  const handleEmailInput = (event) => {
    event.target.setCustomValidity("");
    setValidEmail(checkEmailValidity(event.target.value));
    console.log(validEmail);
  };

  const checkEmailValidity = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInput = (event) => {
    event.target.setCustomValidity("");
  };

  // Handling form submission errors
  const nameSubmissionCheck = (event) => {
    const nameInput = event.target.elements.name;
    if (nameInput.value === "") {
      nameInput.setCustomValidity("Please enter a name.");
      nameInput.reportValidity();
      return false;
    }
    return true;
  };

  const emailSubmissionCheck = (event) => {
    const emailInput = event.target.elements.email;
    if (emailInput.value === "") {
      emailInput.setCustomValidity("Please enter an email.");
      emailInput.reportValidity();
      return false;
    } else if (!validEmail) {
      emailInput.setCustomValidity("Please enter a valid email.");
      emailInput.reportValidity();
      return false;
    }
    return true;
  };

  const messageSubmissionCheck = (event) => {
    const messageInput = event.target.elements.message;
    if (messageInput.value === "") {
      messageInput.setCustomValidity("Please enter a message.");
      messageInput.reportValidity();
      return false;
    }
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!nameSubmissionCheck(event)) {
      return;
    }

    if (!emailSubmissionCheck(event)) {
      return;
    }

    if (!messageSubmissionCheck(event)) {
      return;
    }

    // Process form data (code copied from Web3Forms documentation)
    const formData = new FormData(event.target);
    formData.append("access_key", "dea84e5c-c25b-4490-a0b8-6e17faa4929a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Define a timeout function
    const timeout = (ms) =>
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), ms)
      );

    try {
      const res = await Promise.race([
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: json,
        }).then((res) => res.json()),
        timeout(5000),
      ]);

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been received. I will get back to you shortly.",
          icon: "success",
        });
      } else if (res.error) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred while sending your message. Please try again.",
          icon: "error",
        });
        return;
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occured. Please check your Internet connection or try again later.",
        icon: "error",
      });
      return;
    }

    event.target.elements.name.value = "";
    event.target.elements.email.value = "";
    event.target.elements.message.value = "";
  };

  return (
    <section onSubmit={onSubmit} className="contact">
      <div className="contact-prompt-section">
        <h1 className="contact-prompt">Think we should chat?</h1>
        <h1 className="contact-prompt">Get in touch!</h1>
      </div>
      <form className="contact-form">
        <h2>Contact Form</h2>
        <div className="contact-info-input">
          <label>Name</label>
          <input
            type="text"
            className="contact-info-field"
            placeholder="Enter your name"
            name="name"
            onInput={handleInput}
          />
        </div>
        <div className="contact-info-input">
          <label>Email</label>
          <input
            type="text"
            className="contact-info-field"
            placeholder="Enter your email"
            name="email"
            onInput={handleEmailInput}
          />
        </div>
        <div className="contact-info-input">
          <label>Message</label>
          <textarea
            className="contact-info-field contact-message"
            placeholder="Enter your message"
            name="message"
            onInput={handleInput}
          />
        </div>
        <button type="submit" className="contact-submit">
          Send
        </button>
      </form>
    </section>
  );
}
