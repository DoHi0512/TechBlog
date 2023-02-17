import { useEffect, useReducer, useState } from "react";
import { PostType } from "../../../type/post";
import * as S from "./style";

export default function HorizonPost({ content, date, title, image }: PostType) {
  return (
    <S.Post>
      <S.Img src={image}></S.Img>
      <S.Preview>
        <S.Desc>
          <span>{content}</span>
        </S.Desc>
      </S.Preview>
      <S.Info>
        <span style={{}}>{title}</span>
        <span>{date}</span>
      </S.Info>
    </S.Post>
  );
}
