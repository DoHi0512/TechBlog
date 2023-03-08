import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
class Auth {
  signup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      return auth.currentUser;
    } catch (err) {
      return null;
    }
  };

  siguout = async () => {
    try {
      await signOut(auth);
      console.log(auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };
}

export default new Auth();
