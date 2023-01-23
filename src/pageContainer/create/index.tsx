import * as S from "./style";
import dynamic from "next/dynamic";
import { useState } from "react";
const PostEditor = dynamic(() => import("../../components/PostEditor"), {
  ssr: false,
});
export default function CreatePage() {
  return (
    <S.Layout>
      <S.TitleBox>
        <S.InputTitle />
      </S.TitleBox>
      <PostEditor />
    </S.Layout>
  );
}
