import "./style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Post from "../../components/post/horizon";
import { useReducer, useState } from "react";
import VerticalPost from "../../components/post/vertical";
import HorizonPost from "../../components/post/horizon";
import Link from "next/link";
interface EventType {
  degree: string;
  width: string;
  columns: number;
  sort: string;
  gap: string;
}
const test = [1, 2, 3, 4, 5, 6, 7, 8];
export default function MainPage() {
  const [event, setEvent] = useReducer(
    (state: EventType) => {
      let newState: EventType;
      if (state.sort === "가로") {
        newState = {
          width: "50%",
          sort: "세로",
          columns: 1,
          gap: "0",
          degree: "90deg",
        };
      } else {
        newState = {
          gap: "4rem",
          width: "90%",
          sort: "가로",
          columns: 4,
          degree: "0",
        };
      }
      return newState;
    },
    { degree: "0", width: "90%", columns: 4, sort: "가로", gap: "4rem" }
  );
  const Posts = test.map((data, idx) => {
    if (event.sort === "세로") {
      return (
        <Link href={"/detail/2"} key={idx}>
          <VerticalPost />
        </Link>
      );
    }
    return (
      <Link href={"/detail/2"} key={idx}>
        <HorizonPost
          title="제목"
          content="내용"
          date="2023/01/01"
          image="123"
        />
      </Link>
    );
  });
  return (
    <S.MainLayout>
      <S.Sort>
        <S.Cate>
          <BsGraphUp />
          <span>조회수순</span>
        </S.Cate>
        <S.Cate>
          <BiTime />
          <span>최신순</span>
        </S.Cate>
        <S.Cate
          onClick={() => setEvent()}
          degree={event.degree}
          className="hidden"
        >
          <AiOutlineMenu />
          <span>{event.sort}</span>
        </S.Cate>
      </S.Sort>
      <S.PostLayout width={event.width} columns={event.columns} gap={event.gap}>
        {Posts}
      </S.PostLayout>
    </S.MainLayout>
  );
}
