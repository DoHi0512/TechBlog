import { useEffect, useState } from "react";
import * as S from "./style";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import AuthAPI from "../../../api/auth";
import { darkTheme, lightTheme, ThemeState } from "../../../pages/_app";
import { useQuery } from "react-query";
export function Header() {
  const [theme, setTheme] = useRecoilState(ThemeState);
  const router = useRouter();
  if (router.pathname === "/create" || router.pathname === "/modify/[title]")
    return null;
  return (
    <S.HeaderLayout background={theme.background} text={theme.text}>
      <S.HeaderCenter>
        <Link href="/">
          <S.Title text={theme.text}>dohi.log</S.Title>
        </Link>
        <S.Menu>
          <S.ChangeTheme
            onClick={() =>
              theme.background == "#000000"
                ? setTheme(lightTheme)
                : setTheme(darkTheme)
            }
          >
            <S.Moon rotateX={theme.background == "#000000" ? "-2.5rem" : "0"}>
              <BsFillMoonFill />
              다크모드
            </S.Moon>
            <S.ON>On</S.ON>
          </S.ChangeTheme>
          <Link href="/create">
            <S.Btn background={theme.background} text={theme.text}>
              <span>새 글 작성</span>
            </S.Btn>
          </Link>
          {/* <S.Btn
            background={theme.background}
            text={theme.text}
            onClick={() => AuthAPI.signup()}
          >
            <span>로그인</span>
          </S.Btn>
          <S.Btn
            background={theme.background}
            text={theme.text}
            onClick={() => AuthAPI.siguout()}
          >
            <span>로그아웃</span>
          </S.Btn> */}
        </S.Menu>
      </S.HeaderCenter>
    </S.HeaderLayout>
  );
}
