export const validateForm = (email, password, name) => {
  const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  const nameValid = /^[a-zA-Z ]+$/.test(name);

  if (!emailValid) return "Email not Valid";
  if (!passValid) return "Password not Valid";
  if (!nameValid) return "Name not Valid";

  return null;
};
