import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { AxiosType } from "../type/axios";
import { PostType } from "../type/post";
import RequestApi from "../utils/requestApi";
class Post {
  async create(data: PostType) {
    console.log("create : ", data);
    try {
      const docRef = await addDoc(collection(db, "post"), {
        ...data,
      });
      console.log(docRef);
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getAll() {
    try {
      const querySnapShot = await getDocs(collection(db, "post"));
      return querySnapShot;
    } catch (err) {
      return null;
    }
  }

  async getByTitle(title: string | undefined | string[]) {
    try {
      const q = query(collection(db, "post"), where("title", "==", title));
      const docRef = await getDocs(q);
      return docRef;
    } catch (err) {
      return null;
    }
  }

  modify(data: PostType) {
    try {
      return RequestApi({
        method: "PUT",
        url: `http://localhost:8080/post/modify/`,
        data: data,
      });
    } catch (err) {
      return err;
    }
  }
}

export default new Post();
