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

    // TODO: Add errors for invalid email and password
    handleSignInSubmit(email, password, setEmailError, setPasswordError, () =>
      setShowSignIn(false)
    );
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.formBasicEmail.value;
    const password = event.target.formBasicPassword.value;
    const confirmPassword = event.target.formBasicPasswordConfirm.value;

    // TODO: Add errors for invalid email and password
    handleSignUpSubmit(
      email,
      password,
      confirmPassword,
      setEmailError,
      setPasswordError,
      setConfirmPasswordError,
      () => setShowSignIn(false)
    );
  };

  // Clears error message when the user starts typing
  const clearErrorMessages = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // TODO red error color around input fields
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
            <a
              className="modal-signup"
              href="#signup"
              onClick={() => {
                setShowSignIn(false); // Close sign-in modal
                setShowSignUp(true); // Open sign-up modal
              }}
            >
              Sign Up
            </a>
          </p>

          <Form className="signin-form" onSubmit={handleSignIn}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={clearErrorMessages}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={clearErrorMessages}
              />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
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
            <a
              className="modal-login"
              href="#login"
              onClick={() => {
                setShowSignUp(false); // Close sign-up modal
                setShowSignIn(true); // Open sign-in modal
              }}
            >
              Log In
            </a>
          </p>
          <Form className="signup-form" onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={clearErrorMessages}
              />
              {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
                onChange={clearErrorMessages}
              />
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                onChange={clearErrorMessages}
              />
              {confirmPasswordError && (
                <p style={{ color: "red" }}>{confirmPasswordError}</p>
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
