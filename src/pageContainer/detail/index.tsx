import dynamic from "next/dynamic";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../pages/_app";
import { PostType } from "../../type/post";
import * as S from "./style";
import PostAPI from "../../api/post";
import { useRouter } from "next/dist/client/router";
const PostViewer = dynamic(() => import("../../components/PostViewer"), {
  ssr: false,
});
const Comments = dynamic(() => import("../../components/Comments"), {
  ssr: false,
});
export default function DetailPage({
  content,
  title,
  date,
  image,
  id,
}: PostType) {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const router = useRouter();
  return (
    <S.Layout text={theme.text} background={theme.background}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Info>
          <span>{date}</span>
          <S.Handler>
            <Link href={`/modify/${title}`}>
              <span>수정</span>
            </Link>
            <span>·</span>
            <S.Cursor
              onClick={() => {
                PostAPI.delete(title);
                router.replace("/");
              }}
            >
              삭제
            </S.Cursor>
          </S.Handler>
        </S.Info>
        <PostViewer content={content} />
        <Comments />
      </S.Content>
    </S.Layout>
  );
}
