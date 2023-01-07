import Login from "./loginModal";
import Signup from "./signupModal";
interface ModalStateProps {
  state: string;
}
export default function ModalHandler(props: ModalStateProps) {
  console.log(props);
  return <>{props.state === "login" ? <Login /> : <Signup />}</>;
}
