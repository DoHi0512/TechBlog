import { PostType } from "../../../type/post";
import * as S from "./style";
export default function VerticalPost({
  content,
  image,
  title,
  date,
}: PostType) {
  return (
    <S.Post>
      <S.Content>
        <S.Img src={image}></S.Img>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Desc>{content}</S.Desc>
          <S.Date>{date}</S.Date>
        </S.Info>
      </S.Content>
    </S.Post>
  );
}
