import * as S from "./style";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useRecoilState } from "recoil";
import { PopupState } from "../../../pages/_app";
import { useState } from "react";
import { AuthType } from "../../../type/auth";
export default function Signup() {
  const [popup, setPopup] = useRecoilState(PopupState);
  const [form, setForm] = useState<AuthType>({
    username: "",
    password1: "",
    password2: "",
  });
  return (
    <S.LoginLayout>
      <S.CloseButton>
        <AiOutlineClose className="icon" onClick={() => setPopup("close")} />
      </S.CloseButton>
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
          <span>아이디</span>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </S.InputItem>
        <S.InputItem>
          <span>비밀번호</span>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, password1: e.target.value })}
          />
        </S.InputItem>
        <S.InputItem>
          <span>비밀번호 확인</span>
          <input
            type="text"
            onChange={(e) => setForm({ ...form, password2: e.target.value })}
          />
        </S.InputItem>
        <S.Submit>회원가입</S.Submit>
      </S.InputBox>
      <S.Info>
        계정이 이미 있으신가요?{" "}
        <span onClick={() => setPopup("login")}>로그인</span>
      </S.Info>
    </S.LoginLayout>
  );
}
