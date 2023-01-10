import * as S from "./style";
interface PostProps {
  content: string;
  date: string;
  views: number;
}
export default function Post({ content, date, views }: PostProps) {
  return (
    <S.Post>
      <S.DescLayout>
        <S.Desc>
          <span>{content}</span>
        </S.Desc>
      </S.DescLayout>
      <S.AuthorLayout>
        <S.Author>
          <span>{date}</span>
          <span>{views}</span>
        </S.Author>
      </S.AuthorLayout>
    </S.Post>
  );
}
