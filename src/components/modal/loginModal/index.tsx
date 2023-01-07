import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <S.LoginLayout>
      <S.Title>회원가입</S.Title>
      <S.OAuthBox>
        <S.OAuth bgcolor="#272E33" color="white">
          <AiFillGithub className="icon" />
          <span>Github</span>
        </S.OAuth>
        <S.OAuth bgcolor="white" color="black">
          <FcGoogle className="icon" />
          <span>Google</span>
        </S.OAuth>
      </S.OAuthBox>
      <S.InputBox>
        <S.InputItem>
          <span>Username</span>
          <input type="text" />
        </S.InputItem>
        <S.InputItem>
          <span>Password</span>
          <input type="text" />
        </S.InputItem>
        <S.Submit>회원가입</S.Submit>
      </S.InputBox>
      
    </S.LoginLayout>
  );
}
