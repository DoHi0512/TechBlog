import "./style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useReducer, useState } from "react";
import VerticalPost from "../../components/post/vertical";
import HorizonPost from "../../components/post/horizon";
import Link from "next/link";
import { AxiosType } from "../../type/axios";
import { useRecoilState } from "recoil";
import { ThemeState } from "../../pages/_app";
interface EventType {
  degree: string;
  width: string;
  columns: number;
  sort: string;
  gap: string;
}
export const MainPage = ({ data }: AxiosType) => {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const Posts = data.map((data, idx) => {
    return (
      <Link href={`/detail/${data.title}`} key={idx}>
        <HorizonPost
          title={data.title}
          content={data.content}
          date={data.date}
          image={data.image}
          preview={data.preview}
          tag={data.tag}
        />
      </Link>
    );
  });
  return (
    <S.MainLayout background={theme.background} text={theme.text}>
      <S.Sort>
        <S.Cate>
          <BsGraphUp />
          <span>조회수순</span>
        </S.Cate>
        <S.Cate>
          <BiTime />
          <span>최신순</span>
        </S.Cate>
      </S.Sort>
      <S.PostLayout>{Posts}</S.PostLayout>
    </S.MainLayout>
  );
};
