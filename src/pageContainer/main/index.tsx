import "./style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Post from "../../components/post";
import { useReducer, useState } from "react";
interface EventType {
  degree: string;
  width: string;
  columns: number;
  sort: string;
}
export default function MainPage() {
  const [event, setEvent] = useReducer(
    (state: EventType) => {
      let newState: EventType;
      if (state.sort === "가로") {
        newState = {
          width: "60%",
          sort: "세로",
          columns: 1,
          degree: "90deg",
        };
      } else {
        newState = {
          width: "90%",
          sort: "가로",
          columns: 4,
          degree: "0",
        };
      }
      return newState;
    },
    { degree: "0", width: "90%", columns: 4, sort: "가로" }
  );
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
      <S.PostLayout width={event.width} columns={event.columns}>
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
        <Post
          content={"본문입니다"}
          date={"2023/01/01"}
          title={"제목입니다"}
          image={"이미지입니다"}
        />
      </S.PostLayout>
    </S.MainLayout>
  );
}
