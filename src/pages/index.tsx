import { GetServerSideProps } from "next";
import { MainPage } from "../pageContainer/main";
import { PostType } from "../type/post";
import PostApi from "../api/post";
import { AxiosType } from "../type/axios";

export default function Home(data: AxiosType) {
  return <MainPage {...data}/>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data : AxiosType = await PostApi.getAll();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data.data)),
    },
  };
};
