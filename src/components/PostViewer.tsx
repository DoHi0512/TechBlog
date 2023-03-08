import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
interface PostingProps {
  content: string;
}
export default function PostViewer({ content }: PostingProps) {
  return <Viewer initialValue={content}></Viewer>;
}
