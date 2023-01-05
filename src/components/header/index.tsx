import { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineCheckSquare, AiFillCaretDown } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let token;
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);
  return (
    <>
      <S.HeaderLayout>
        <S.HeaderCenter>
          {token ? (
            <S.HeaderIconName>
              <AiOutlineCheckSquare className="icon" />
              <S.Username>{"username123"}</S.Username>
            </S.HeaderIconName>
          ) : (
            <S.Title>BLOG</S.Title>
          )}

          <S.Menu>
            <BsFillSunFill className="icon" />
            <CiSearch className="icon" />
            {token ? (
              <>
                <S.CreatePost>
                  <span>새 글 작성</span>
                </S.CreatePost>
                <S.Profile>
                  <S.ProfileImage>
                    <img src="https://velog.velcdn.com/images/dohi/profile/ab7884a4-0310-403b-bdcc-4db11d6c231f/image.webp"></img>
                  </S.ProfileImage>
                  <AiFillCaretDown className="icon" />
                </S.Profile>
              </>
            ) : (
              <S.Login onClick={() => setIsOpen(true)}>로그린</S.Login>
            )}
          </S.Menu>
        </S.HeaderCenter>
      </S.HeaderLayout>
    </>
  );
}
