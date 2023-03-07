import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../pages/_app";
import { IdType } from "../../type/id";
import { PostType } from "../../type/post";
import * as S from "./style";
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
  console.log(theme);
  return (
    <S.Layout text={theme.text} background={theme.background}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Info>
          <S.Date>{date}</S.Date>
          <Link href={`/modify/${title}`}>
            <S.Modify>수정</S.Modify>
          </Link>
        </S.Info>
        <PostViewer content={content} />
        <Comments />
      </S.Content>
    </S.Layout>
  );
}
