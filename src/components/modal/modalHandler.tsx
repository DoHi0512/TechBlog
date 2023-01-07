import { useRecoilState } from "recoil";
import { popupState } from "../asset/header";
import Login from "./loginModal";
import Signup from "./signupModal";
export default function ModalHandler() {

  const [popup, setPopup] = useRecoilState(popupState);
  console.log();
  return <> {popup === "login" ? <Login /> : <Signup />}</>;
}
