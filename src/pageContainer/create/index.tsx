import * as S from "./style";
import dynamic from "next/dynamic";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const PostEditor = dynamic(() => import("../../components/PostEditor"), {
  ssr: false,
});
export default function CreatePage() {
  const [content, setContent] = useState<string>("");
  console.log(content);
  return (
    <S.Layout>
      <S.InputBox>
        <S.Info>제목</S.Info>
        <S.Title></S.Title>
        <S.Info>내용</S.Info>
        <PostEditor />
        <S.Submit>
          <S.Btn
            bgcolor="white"
            txtcolor="black"
            hoverBgcolor="rgba(0,0,0,0.05)"
          >
            <AiOutlineArrowLeft />
            <span>나가기</span>
          </S.Btn>
          <S.Btn bgcolor="#12b886" txtcolor="white" hoverBgcolor="#20c997">
            <span>출간하기</span>
          </S.Btn>
        </S.Submit>
      </S.InputBox>
    </S.Layout>
  );
}
