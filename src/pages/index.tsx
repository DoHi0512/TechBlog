import { GetServerSideProps } from "next";
import { MainPage } from "../pageContainer/main";
import { PostType } from "../type/post";
import PostApi from "../api/post";
import { AxiosType } from "../type/axios";
import {
  DocumentData,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { FirebaseType } from "../type/firebase";

export default function Home(data: FirebaseType[]) {
  console.log(data.data);
  return <MainPage {...data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data: FirebaseType | null = await PostApi.getAll();
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
