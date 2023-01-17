import { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineCheckSquare, AiFillCaretDown } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { PopupState } from "../../../pages/_app";
import ModalHandler from "../../modal/authModal/ModalHandler";
export function Header() {
  const [popup, setPopup] = useRecoilState(PopupState);
  let token;
  useEffect(() => {
    token = localStorage.getItem("token");
  }, []);
  return (
    <S.HeaderLayout>
      <S.HeaderCenter>
        {token ? (
          <S.HeaderIconName>
            <AiOutlineCheckSquare className="icon" />
            <S.Username>{"username123"}</S.Username>
          </S.HeaderIconName>
        ) : (
          <S.Title>dohi.log</S.Title>
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
            <S.Login onClick={() => setPopup("login")}>로그인</S.Login>
          )}
        </S.Menu>
      </S.HeaderCenter>
      <Modal
        isOpen={popup !== "close"}
        onRequestClose={() => setPopup("close")}
        className="modal"
      >
        <ModalHandler />
      </Modal>
    </S.HeaderLayout>
  );
}
