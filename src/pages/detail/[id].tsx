import { useRouter } from "next/router";
import DetailPage from "../../pageContainer/detail";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id === "string") {
    return <DetailPage id={id} />;
  } else return <DetailPage id={""} />;
}
