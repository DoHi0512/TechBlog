import { ModifyPage } from "../../pageContainer/modify";
import { GetServerSideProps } from "next/types";
import PostApi from "../../api/post";
import { AxiosType } from "../../type/axios";
import { PostType } from "../../type/post";
export const Modify = () => {
  return <ModifyPage />;
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const data: AxiosType = await PostApi.getById-(ctx.query.id);
//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(data.data)),
//     },
//   };
// };

// export default Modify;
