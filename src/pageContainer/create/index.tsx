import * as S from "./style";
import dynamic from "next/dynamic";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";
const PostEditor = dynamic(() => import("../../components/PostEditor"), {
  // ssr: false,
});
export default function CreatePage() {
  const [content, setContent] = useState<string>("");
  const router = useRouter();
  console.log(content);
  return (
    <S.Layout>
      <S.InputBox>
        <S.Info>제목</S.Info>
        <S.Title placeholder="제목 입력"></S.Title>
        <S.Info>태그</S.Info>
        <S.Title placeholder="(space 또는 ',' 로 구분)"></S.Title>
        <S.Info>내용</S.Info>
        <PostEditor />
        <S.Submit>
          <S.Btn
            bgcolor="white"
            txtcolor="black"
            hoverBgcolor="rgba(0,0,0,0.05)"
            onClick={() => router.back()}
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
