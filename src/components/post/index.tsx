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
      <S.Preview>
        <S.Desc>
          <span>
            감격스로운 카카오 공채 합격이 엊그제 같은데 벌써 1년이 지나있다.
            이제 신입 공채분들이 온보딩 교육을 받으면서 나의 신입 버프도 끝이
            보인다. 그래서 나의 1년은 물경력이 된 것일까 🥹 너무나 맴찢할
            주제이지만 이에 대해 파고들 수밖에 없었다.
          </span>
        </S.Desc>
      </S.Preview>
      <S.Info>
        <span style={{ fontWeight: "bold" }}>{title}</span>
        <span>{date}</span>
      </S.Info>
    </S.Post>
  );
}
