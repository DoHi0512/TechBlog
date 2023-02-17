import * as S from "./style";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";
import PostApi from "../../api/post";
import { PostType } from "../../type/post";
import Link from "next/dist/client/link";
interface UploadImage {
  file: File;
  thumbnail: string;
  type: string;
}
export default function PostEditor() {
  const editorRef = useRef(null);
  const router = useRouter();
  const [post, setPost] = useState<PostType>({
    content: "",
    title: "",
    tag: [],
    image: "",
  });
  // const [imageFile, setImageFile] = useState<UploadImage | null>(null);
  const GetContent = () => {
    if (editorRef.current) {
      const editorIns = editorRef.current.getInstance();
      const editorMark = editorIns.getMarkdown();
      const editorHtml = editorIns.getHTML();
      console.log(editorHtml);
      setPost({ ...post, content: editorMark });
    }
  };
  return (
    <S.Layout>
      <S.InputBox>
        <S.Info>제목</S.Info>
        <S.Title
          placeholder="제목 입력"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        ></S.Title>
        <S.Info>태그</S.Info>
        <S.Title
          placeholder="(스페이스바 또는 ',' 로 구분)"
          onChange={(e) => setPost({ ...post, tag: [e.target.value] })}
        ></S.Title>
        <S.Info>내용</S.Info>
        <Editor
          ref={editorRef}
          initialValue="# 여기에 글 작성"
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
          onChange={() => GetContent()}
        />
        <S.Submit>
          {/* <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => {
              const fileList = e.target.files;

              if (fileList && fileList[0]) {
               
                const url = URL.createObjectURL(fileList[0]);
                console.log(url)
                setImageFile({
                  file: fileList[0],
                  thumbnail: url,
                  type: fileList[0].type.slice(0, 5),
                });
                setPost({
                  ...post,
                  image: imageFile?.file,
                });
                console.log(post);
              }
            }}
          /> */}

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
            <Link href="/">
              <span onClick={() => PostApi.create(post)}>출간하기</span>
            </Link>
          </S.Btn>
        </S.Submit>
      </S.InputBox>
    </S.Layout>
  );
}
