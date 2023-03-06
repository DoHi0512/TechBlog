import dynamic from "next/dynamic";
import { PostType } from "../../type/post";
const PostEditor = dynamic(() => import("../../components/postEditor/index"), {
  ssr: false,
});

// export const ModifyPage = (data: PostType) => {
//   return <PostEditor {...data} />;
// };

export const ModifyPage = () => {
  return <div>HI</div>;
};
