import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/asset/header";
import { atom, RecoilRoot } from "recoil";
export const PopupState = atom({
  key: "pop",
  default: "close",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
