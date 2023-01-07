import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { popupState } from "../../asset/header";
export default function Login() {
  const [popup, setPopup] = useRecoilState(popupState);
  return (
    <S.LoginLayout>
      <S.Title>로그인</S.Title>
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
          <span>아이디</span>
          <input type="text" />
        </S.InputItem>
        <S.InputItem>
          <span>비밀번호</span>
          <input type="text" />
        </S.InputItem>
        <S.Submit>로그인</S.Submit>
      </S.InputBox>
      <S.Info>
        계정이 아직 없으신가요?{" "}
        <span onClick={() => setPopup("singup")}>회원가입</span>
      </S.Info>
    </S.LoginLayout>
  );
}
