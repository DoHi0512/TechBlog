import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("../../components/postEditor/index"), {
  ssr: false,
});
export default function CreatePage() {
  console.log();
  return <PostEditor />;
}
