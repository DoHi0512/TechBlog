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
  if (router.pathname === "/create" || router.pathname === "/modify/[id]")
    return null;
  return (
    <S.HeaderLayout>
      <S.HeaderCenter>
        <Link href="/">
          <S.Title>dohi.log</S.Title>
        </Link>

        <S.Menu>
          <BsFillSunFill className="icon" />
          <CiSearch className="icon" />

          <S.CreatePost>
            <Link href="/create">
              <span>새 글 작성</span>
            </Link>
          </S.CreatePost>
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
