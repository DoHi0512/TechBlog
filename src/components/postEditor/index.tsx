import * as S from "./style";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";
import { MutableRefObject, useRef } from "react";
export default function PostEditor() {
  const editorRef = useRef(null);
  const router = useRouter();
  const GetContent = () => {
    if (editorRef.current) {
      const editorIns = editorRef.current.getInstance();
      const editorMark = editorIns.getMarkdown();
      console.log(editorMark);
    }
  };
  return (
    <S.Layout>
      <S.InputBox>
        <S.Info>제목</S.Info>
        <S.Title placeholder="제목 입력"></S.Title>
        <S.Info>태그</S.Info>
        <S.Title placeholder="(스페이스바 또는 ',' 로 구분)"></S.Title>
        <S.Info>내용</S.Info>
        <Editor
          ref={editorRef}
          initialValue="# 여기에 글 작성"
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
        />
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
            <span onClick={() => GetContent()}>출간하기</span>
          </S.Btn>
        </S.Submit>
      </S.InputBox>
    </S.Layout>
  );
}
