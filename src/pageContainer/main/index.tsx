import "./style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import Post from "../../components/post";
export default function MainPage() {
  return (
    <S.MainLayout>
      <S.Sort>
        <S.Cate>
          <BsGraphUp className="icon" />
          <span>조회수순</span>
        </S.Cate>
        <S.Cate>
          <BiTime className="icon" />
          <span>최신순</span>
        </S.Cate>
      </S.Sort>
      <S.PostLayout>
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
