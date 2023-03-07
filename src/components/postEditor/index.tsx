import * as S from "./style";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";
import { useCallback, useRef, useState } from "react";
import PostApi from "../../api/post";
import { PostType } from "../../type/post";
import Link from "next/dist/client/link";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../pages/_app";
interface ModifyType {
  content?: string;
  title?: string;
  tag?: string[];
  image?: "string";
}
export default function PostEditor({ content, title, tag, image }: ModifyType) {
  const editorRef = useRef<EditorType>(null);
  const router = useRouter();
  const currentDate = new Date().toLocaleDateString().toString();
  const task = router.asPath.substring(1, 7) === "modify" ? true : false;
  const [theme, setTheme] = useRecoilState(ThemeState);
  const [post, setPost] = useState<PostType>({
    content: content ? content : "",
    title: title ? title : "",
    tag: tag ? tag : [],
    image: image ? image : "",
    date: currentDate,
  });
  const GetContent = useCallback(() => {
    if (editorRef.current) {
      const editorIns = editorRef.current.getInstance();
      const editorMark = editorIns.getMarkdown();
      setPost({ ...post, content: editorMark });
    }
  }, [, post]);
  return (
    <S.Layout>
      <S.InputBox>
        <S.Info>제목</S.Info>
        <S.Title
          placeholder="제목 입력"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
        ></S.Title>
        <S.Info>태그</S.Info>
        <S.Title
          placeholder="(스페이스바 또는 ',' 로 구분)"
          onChange={(e) => setPost({ ...post, tag: [e.target.value] })}
          value={post.tag}
        ></S.Title>
        <S.Info>내용</S.Info>
        <Editor
          ref={editorRef}
          initialValue={content}
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
          onChange={() => GetContent()}
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
            <Link href="/">
              <span
                style={{ color: "white" }}
                onClick={() =>
                  task ? PostApi.modify(post, title) : PostApi.create(post)
                }
              >
                {task ? "수정하기" : "출간하기"}
              </span>
            </Link>
          </S.Btn>
        </S.Submit>
      </S.InputBox>
    </S.Layout>
  );
}
