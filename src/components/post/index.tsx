import * as S from "./style";
interface PostProps {
  title: string;
  content: string;
  date: string;
  image?: string;
}
export default function Post({ content, date, title, image }: PostProps) {
  return (
    <S.Post>
      <S.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X4inHhKB3FG2-kFxx2jE5GhW-Qh81DQotQ&usqp=CAU"></S.Img>
      <S.Info>
        <span style={{ fontWeight: "bold" }}>{title}</span>
        <span>{date}</span>
      </S.Info>
    </S.Post>
  );
}
