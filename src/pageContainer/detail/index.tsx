import dynamic from "next/dynamic";
import { IdType } from "../../type/id";
import { PostType } from "../../type/post";
import * as S from "./style";
const PostViewer = dynamic(() => import("../../components/PostViewer"), {
  ssr: false,
});
const Comments = dynamic(() => import("../../components/Comments"), {
  ssr: false,
});
export default function DetailPage({ content, title, date, image }: PostType) {
  console.log(content, title, date, image);
  return (
    <S.Layout>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Info>
          <S.Author>DoHi</S.Author>·<S.Date>{date}</S.Date>
        </S.Info>
        <PostViewer content={content} />
        <Comments />
      </S.Content>
    </S.Layout>
  );
}
