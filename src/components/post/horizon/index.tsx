import { useEffect, useReducer, useState } from "react";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../../pages/_app";
import { PostType } from "../../../type/post";
import * as S from "./style";

export default function HorizonPost({ content, date, title, image }: PostType) {
  const [theme, setTheme] = useRecoilState(ThemeState);
  return (
    <S.Post text={theme.text} background={theme.background}>
      <S.Img src={image}></S.Img>
      <S.Preview>
        <S.Desc>
          <span>{content}</span>
        </S.Desc>
      </S.Preview>
      <S.Info>
        <span>{title}</span>
        <span>{date}</span>
      </S.Info>
    </S.Post>
  );
}
