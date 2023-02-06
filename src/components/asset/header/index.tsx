import { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineCheckSquare, AiFillCaretDown } from "react-icons/ai";
import { BsFillSunFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { PopupState } from "../../../pages/_app";
import ModalHandler from "../../modal/authModal/ModalHandler";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
export function Header() {
  const [popup, setPopup] = useRecoilState(PopupState);
  const router = useRouter();
  if (router.pathname === "/create") return null;
  let token = null;
  // useEffect(() => {
  //   token = localStorage.getItem("token");
  // }, []);
  return (
    <S.HeaderLayout>
      <S.HeaderCenter>
        {token ? (
          <S.HeaderIconName>
            <S.Username>{"username123"}</S.Username>
          </S.HeaderIconName>
        ) : (
          <Link href="/">
            <S.Title>dohi.log</S.Title>
          </Link>
        )}

        <S.Menu>
          <BsFillSunFill className="icon" />
          <CiSearch className="icon" />
          {token ? (
            <>
              <S.CreatePost>
                <Link href="/create">
                  <span>새 글 작성</span>
                </Link>
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
