import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebaseConfig";
export const GithubLogin = async () => {
  const githubProvider = new GithubAuthProvider();
  await signInWithRedirect(auth, githubProvider);
  console.log(auth.currentUser);
};
