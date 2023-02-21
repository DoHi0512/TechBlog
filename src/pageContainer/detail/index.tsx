import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <S.Layout>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Info>
          <S.Date>{date}</S.Date>
          <Link href={{ pathname: "/modify/[id]", query: { id: id } }}>
            <S.Modify>수정</S.Modify>
          </Link>
        </S.Info>
        <PostViewer content={content} />
        <Comments />
      </S.Content>
    </S.Layout>
  );
}
