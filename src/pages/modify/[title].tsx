import { ModifyPage } from "../../pageContainer/modify";
import { GetServerSideProps } from "next/types";
import PostApi from "../../api/post";
import { AxiosType } from "../../type/axios";
import { PostType } from "../../type/post";
import { FirebaseType } from "../../type/firebase";
import { DocumentData } from "firebase/firestore";
export const Modify = (data: any) => {
  return <ModifyPage {...data.data[0]} />;
};

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

export default Modify;
