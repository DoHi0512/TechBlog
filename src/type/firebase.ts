import { DocumentData, QuerySnapshot } from "firebase/firestore";
import { PostType } from "./post";

export type FirebaseType = QuerySnapshot<DocumentData> | null;
