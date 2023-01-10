import { useRecoilState } from "recoil";
import { PopupState } from "../../../pages/_app";
import Login from "./Login";
import Signup from "./Signup";
export default function ModalHandler() {
  const [popup, setPopup] = useRecoilState(PopupState);
  console.log();
  return <>{popup === "login" ? <Login /> : <Signup />}</>;
}
