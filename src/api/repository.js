import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import * as firebase from "./firebase.js";

const DB = getDatabase(firebase.firebaseApp);

// 데이터가 업데이트 될 때마다 호출되는 API
export const syncReviews = (userId, onUpdate) => {
  const query = ref(DB, `${userId}/reviews`);
  onValue(query, (snapshot) => {
    const value = snapshot.val();
    value && onUpdate(value);
  });
  return () => off(query);
};

export const saveReview = (userId, review) => {
  set(ref(DB, `${userId}/reviews/${review.id}`), review);
};

export const removeReview = (userId, review) => {
  remove(ref(DB, `${userId}/reviews/${review.id}`));
};
