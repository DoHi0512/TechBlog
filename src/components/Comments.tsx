import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ThemeState } from "../pages/_app";
export const Layout = styled.div`
  margin-top: 20rem;
  .utterances {
    max-width: 100% !important;
  }
`;
export default function Comments() {
  const commentsRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.async = true;
    scriptEl.crossOrigin = "anonymous";
    scriptEl.setAttribute("repo", "DoHi0512/Blog_FE");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("label", "💬 Comment");
    commentsRef.current?.appendChild(scriptEl);
  }, []);
  return (
    <Layout>
      <section ref={commentsRef} />
    </Layout>
  );
}
