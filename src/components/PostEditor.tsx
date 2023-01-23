import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
export default function PostEditor() {
  return (
    <Editor
      initialValue="# 여기에 글 작성"
      previewStyle="vertical"
      height="100%"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
}
