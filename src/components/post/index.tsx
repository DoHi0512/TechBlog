import * as S from "./style";
interface PostProps {
  content: string;
  date: string;
  views: number;
}
export default function Post(props: PostProps) {
  return (
    <S.Post>
      <S.DescLayout>
        <S.Desc>
          <span>{props.content}</span>
        </S.Desc>
      </S.DescLayout>
      <S.AuthorLayout>
        <S.Author>
          <span>{props.date}</span>
          <span>{props.views}</span>
        </S.Author>
      </S.AuthorLayout>
    </S.Post>
  );
}
