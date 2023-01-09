import { useRecoilState } from "recoil";
import { PopupState } from "../asset/header";
import Login from "./loginModal";
import Signup from "./signupModal";
export default function ModalHandler() {

  const [popup, setPopup] = useRecoilState(PopupState);
  console.log();
  return <> {popup === "login" ? <Login /> : <Signup />}</>;
}
