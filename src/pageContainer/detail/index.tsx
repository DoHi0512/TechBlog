import { useState } from "react";
import { IdType } from "../../type/id";
import * as S from "./style";
export default function DetailPage({ id }: IdType) {
  return (
    <S.Layout>
      <S.Content>
        <S.Title>setState 비동기 반영</S.Title>
        <S.Info>
          <S.Author>DoHi</S.Author>·<S.Date>5일 전</S.Date>
        </S.Info>
      </S.Content>
    </S.Layout>
  );
}
