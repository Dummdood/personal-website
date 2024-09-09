export const handleSignInSubmit = async (
  email,
  password,
  setEmailError,
  setPasswordError,
  closeModal
) => {
  const result = validateEmailAndPassword(
    email,
    setEmailError,
    password,
    setPasswordError
  );
  if (!result) {
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
    closeModal(); // Close the modal after successful sign-in
  } catch (error) {
    console.error("Error:", error);
  }
};

export const handleSignUpSubmit = async (
  email,
  password,
  confirmPassword,
  setEmailError,
  setPasswordError,
  setConfirmPasswordError,
  closeModal
) => {
  const result = validateEmailAndPassword(
    email,
    setEmailError,
    password,
    setPasswordError,
    confirmPassword,
    setConfirmPasswordError
  );
  if (!result) {
    return;
  }

  try {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, confirmPassword }),
    });
    const data = await response.json();
    console.log(data);
    closeModal(); // Close the modal after successful sign-up
  } catch (error) {
    console.error("Error:", error);
  }
};

const validateEmailAndPassword = (
  email,
  setEmailError,
  password,
  setPasswordError,
  confirmPassword = null,
  setConfirmPasswordError = null
) => {
  emailAndPasswordValid = true;
  passwordValid = true;

  // Validate email
  if (!validateEmail(email)) {
    setEmailError("Invalid email");
    emailAndPasswordValid = false;
  }

  // Validate password
  if (!validatePassword(password)) {
    setPasswordError(
      "Password must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number"
    );
    emailAndPasswordValid = false;
    passwordValid = false;
  }

  // If confirmPassword is provided , check if passwords match
  if (
    confirmPassword !== null &&
    password !== confirmPassword &&
    passwordValid
  ) {
    setPasswordError("Passwords do not match");
    setConfirmPasswordError("Passwords do not match");
    emailAndPasswordValid = false;
  }

  return emailAndPasswordValid;
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
};
