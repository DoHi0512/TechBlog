import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";
import DetailPage from "../../pageContainer/detail";
import PostApi from "../../api/post";
import { PostType } from "../../type/post";
import { AxiosType } from "../../type/axios";
export default function Detail(data: PostType) {
  const router = useRouter();
  const { id } = router.query;
  console.log({...data});
  return <DetailPage {...data.data} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data: AxiosType = await PostApi.getById(ctx.query.id);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data.data)),
    },
  };
};
