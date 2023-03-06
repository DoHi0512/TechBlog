import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import DetailPage from "../../pageContainer/detail";
import PostApi from "../../api/post";
import { PostType } from "../../type/post";
import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { FirebaseType } from "../../type/firebase";
export default function Detail(data: any) {
  return <DetailPage {...data.data[0]} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: FirebaseType = await PostApi.getByTitle(ctx.query.title);
  const posts: FirebaseType[] = [];
  data?.forEach((element: DocumentData) => {
    posts.push(element.data());
  });
  return {
    props: {
      data: posts,
    },
  };
};
