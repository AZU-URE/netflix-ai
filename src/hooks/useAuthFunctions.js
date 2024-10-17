import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../util/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const useAuthFunctions = () => {
  const navigate = useNavigate();

  const LogIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        navigate("/browse");
        // return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + errorMessage);
      });
  };

  const LogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        alert(error.message);
      });
  };

  return { LogIn, LogOut };
};
