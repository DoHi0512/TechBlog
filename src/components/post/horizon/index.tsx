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
      <S.Img src={image}></S.Img>
      <S.Preview>
        <S.Desc>
          <span>{content}</span>
        </S.Desc>
      </S.Preview>
      <S.Info>
        <span style={{ fontWeight: "bold" }}>{title}</span>
        <span>{date}</span>
      </S.Info>
    </S.Post>
  );
}
