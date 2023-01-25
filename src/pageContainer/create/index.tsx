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
          <S.Exit>
            <AiOutlineArrowLeft />
            <span>나가기</span>
          </S.Exit>
          <S.Finish>
            <span>출간하기</span>
          </S.Finish>
        </S.Submit>
      </S.InputBox>
    </S.Layout>
  );
}
