import "./style";
import * as S from "./style";
import { BsGraphUp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
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
        <S.Post>
          <S.DescLayout>
            <S.Desc>
              <span>본문입니다</span>
            </S.Desc>
          </S.DescLayout>
          <S.AuthorLayout>
            <S.Author>
              <span>2023/01/01</span>
              <span>조회수{213}</span>
            </S.Author>
          </S.AuthorLayout>
        </S.Post>
        <S.Post>
          <S.DescLayout>
            <S.Desc>
              <span>본문입니다</span>
            </S.Desc>
          </S.DescLayout>
          <S.AuthorLayout>
            <S.Author>
              <span>2023/01/01</span>
              <span>조회수{213}</span>
            </S.Author>
          </S.AuthorLayout>
        </S.Post>
        <S.Post>
          <S.DescLayout>
            <S.Desc>
              <span>본문입니다</span>
            </S.Desc>
          </S.DescLayout>
          <S.AuthorLayout>
            <S.Author>
              <span>2023/01/01</span>
              <span>조회수{213}</span>
            </S.Author>
          </S.AuthorLayout>
        </S.Post>
        <S.Post>
          <S.DescLayout>
            <S.Desc>
              <span>본문입니다</span>
            </S.Desc>
          </S.DescLayout>
          <S.AuthorLayout>
            <S.Author>
              <span>2023/01/01</span>
              <span>조회수{213}</span>
            </S.Author>
          </S.AuthorLayout>
        </S.Post>
        <S.Post>
          <S.DescLayout>
            <S.Desc>
              <span>본문입니다</span>
            </S.Desc>
          </S.DescLayout>
          <S.AuthorLayout>
            <S.Author>
              <span>2023/01/01</span>
              <span>조회수{213}</span>
            </S.Author>
          </S.AuthorLayout>
        </S.Post>
      </S.PostLayout>
    </S.MainLayout>
  );
}
