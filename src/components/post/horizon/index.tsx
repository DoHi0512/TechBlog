import { useEffect, useReducer, useState } from "react";
import * as S from "./style";
interface PostProps {
  title: string;
  content: string;
  date: string;
  image: string;
}
export default function HorizonPost({
  content,
  date,
  title,
  image,
}: PostProps) {
  return (
    <S.Post>
      <S.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X4inHhKB3FG2-kFxx2jE5GhW-Qh81DQotQ&usqp=CAU"></S.Img>
      <S.Preview>
        <S.Desc>
          <span>
            useReducer에 대한 저의 열정과 이를 사용할 수 있는 다양한 경우를
            설명했지만, 성급하게 추상화하지 않겠습니다. 보통의 경우 useState를
            사용해도 괜찮습니다. 상태와 검증 조건들이 복잡해지기 시작하며
            추가적인 노력이 들어가기 시작한다고 느껴지면 그때 점진적으로
            useReducer를 고려해도 좋습니다. 그 후, 복잡한 객체들에 useReducer를
            사용하기 시작하고 상태 변경에 따른 위험에 자주 직면할 때 Immer의
            사용을 고려해 볼 수 있습니다. 혹은 상태 관리가 복잡해진 시점에
            도달했다면 Mobx, Zustand, XState와 같은 훨씬 더 확장하기 쉬운
            솔루션을 검토해보는 것이 좋습니다. 언제나 잊지 마세요. 단순하게
            시작하고 필요한 경우에만 복잡성을 추가하세요.
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
