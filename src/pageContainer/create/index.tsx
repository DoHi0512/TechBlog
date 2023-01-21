import * as S from "./style";
import dynamic from "next/dynamic";
import { useState } from "react";
export default function CreatePage() {
  const [value, setValue] = useState<string | undefined>("# HIHI");
  console.log(value);
  return (
   
  );
}
