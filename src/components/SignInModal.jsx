import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/signinmodal.css";
import { handleSignInSubmit, handleSignUpSubmit } from "../utils/authHandlers";

function SignInModal() {
  // Sign-in and sign-up modal states
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // States for error messages
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.formBasicEmail.value;
    const password = event.target.formBasicPassword.value;

    handleSignInSubmit(
      email,
      password,
      setEmailError,
      setPasswordError,
      closeModal
    );
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.formBasicEmail.value;
    const password = event.target.formBasicPassword.value;
    const confirmPassword = event.target.formBasicPasswordConfirm.value;

    handleSignUpSubmit(
      email,
      password,
      confirmPassword,
      setEmailError,
      setPasswordError,
      setConfirmPasswordError,
      closeModal
    );
  };

  // Clears error message when the user starts typing
  const clearErrorMessages = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  const switchModal = () => {
    clearErrorMessages();
    setShowSignIn(!showSignIn);
    setShowSignUp(!showSignUp);
  };

  const closeModal = () => {
    clearErrorMessages();
    setShowSignIn(false);
    setShowSignUp(false);
  };

  return (
    <>
      {/* Sign In Button */}
      <Button
        className="signin-button"
        variant="primary"
        onClick={() => setShowSignIn(true)}
      >
        Sign In
      </Button>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={() => setShowSignIn(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-account-check">
            Don't yet have an account?{" "}
            <a className="modal-signup" href="#signup" onClick={switchModal}>
              Sign Up
            </a>
          </p>

          <Form className="signin-form" onSubmit={handleSignIn} noValidate>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your email"
                className={emailError ? "error-glow" : ""}
                onChange={clearErrorMessages}
              />
              {emailError && <p className="form-error-message">{emailError}</p>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className={passwordError ? "error-glow" : ""}
                onChange={clearErrorMessages}
              />
              {passwordError && (
                <p className="form-error-message">{passwordError}</p>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-account-check">
            Already have an account?{" "}
            <a className="modal-login" href="#login" onClick={switchModal}>
              Log In
            </a>
          </p>
          <Form className="signup-form" onSubmit={handleSignUp} noValidate>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className={emailError ? "error-glow" : ""}
                onChange={clearErrorMessages}
              />
              {emailError && <p className="form-error-message">{emailError}</p>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                className={passwordError ? "error-glow" : ""}
                onChange={clearErrorMessages}
              />
              {passwordError && (
                <p className="form-error-message">{passwordError}</p>
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                className={confirmPasswordError ? "error-glow" : ""}
                onChange={clearErrorMessages}
              />
              {confirmPasswordError && (
                <p className="form-error-message">{confirmPasswordError}</p>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
