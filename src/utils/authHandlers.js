export const handleSignInSubmit = (event, closeModal) => {
    event.preventDefault();
    // Add your sign-in logic here (e.g., API call)
    console.log("Sign In form submitted");
    closeModal(); // Close the modal after sign-in
  };
  
  export const handleSignUpSubmit = (event, closeModal) => {
    event.preventDefault();
    // Add your sign-up logic here (e.g., API call)
    console.log("Sign Up form submitted");
    closeModal(); // Close the modal after sign-up
  };