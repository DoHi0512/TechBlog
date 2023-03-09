import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { useRecoilState } from "recoil";
import { ThemeState } from "../pages/_app";
// import "@toast-ui/editor/dist/theme/toast"
interface PostingProps {
  content: string;
}
export default function PostViewer({ content }: PostingProps) {
  const [theme, setTheme] = useRecoilState(ThemeState);
  console.log(theme.background == "#000000" ? "dark" : "light");
  return (
    <Viewer
      initialValue={content}
      theme={theme.background == "#000000" ? "dark" : "light"}
    ></Viewer>
  );
}
