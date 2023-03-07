import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/asset/header";
import { atom, RecoilRoot, useRecoilState } from "recoil";
import { ThemeType } from "../type/theme";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "persistance",
  storage: sessionStorage,
});

export const lightTheme: ThemeType = {
  background: "#ffffff",
  text: "#000000",
};

export const darkTheme: ThemeType = {
  background: "#000000",
  text: "#ffffff",
};

export const ThemeState = atom<ThemeType>({
  key: "theme",
  default: lightTheme,
  effects_UNSTABLE: [persistAtom],
});
export default function App({ Component, pageProps, ...other }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} {...other} />
    </RecoilRoot>
  );
}
