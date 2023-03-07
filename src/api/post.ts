import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { PostType } from "../type/post";
class Post {
  async create(data: PostType) {
    console.log("create : ", data);
    try {
      const docRef = await setDoc(doc(db, "post", data.title), {
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

  async modify(data: PostType, title: string | undefined | string[]) {
    try {
      if (typeof title == "string") {
        const docRef = doc(db, "post", title);
        await deleteDoc(docRef);
        await setDoc(doc(db, "post", data.title), { ...data });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default new Post();
