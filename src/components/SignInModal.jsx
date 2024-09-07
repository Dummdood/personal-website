import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/signinmodal.css";

function SignInModal() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => {
    setShowSignIn(false); // Close sign-in modal
    setShowSignUp(true); // Open sign-up modal
  };

  const handleSwitchToSignIn = () => {
    setShowSignUp(false); // Close sign-up modal
    setShowSignIn(true); // Open sign-in modal
  };

  return (
    <>
      {/* Sign In Button */}
      <Button
        className="signin-button"
        variant="primary"
        onClick={handleShowSignIn}
      >
        Sign In
      </Button>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={handleCloseSignIn}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-account-check">
            Don't yet have an account?{" "}
            <a
              className="modal-signup"
              href="#signup"
              onClick={handleShowSignUp}
            >
              Sign Up
            </a>
          </p>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>~
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={handleCloseSignUp}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-account-check">
            Already have an account?{" "}
            <a
              className="modal-login"
              href="#login"
              onClick={handleSwitchToSignIn}
            >
              Log In
            </a>
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm password" />
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
