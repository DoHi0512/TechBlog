import { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineCheckSquare, AiFillCaretDown } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import ModalHandler from "../../modal/modalHandler";
import { atom, RecoilRoot } from "recoil";
export const PopupState = atom({
  key: "popup",
  default: "login",
});
export const ModalState = atom({
  key : 'modal',
  default : false
})
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  let token;
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);
  return (
    <RecoilRoot>
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
              <S.Login onClick={() => setIsOpen((prev) => !prev)}>
                로그인
              </S.Login>
            )}
          </S.Menu>
        </S.HeaderCenter>
        {isOpen ? <ModalHandler /> : null}
      </S.HeaderLayout>
    </RecoilRoot>
  );
}
