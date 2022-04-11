import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import * as firebase from "./firebase.js";

// getAuth : firebase에서 간단한 로그인을 도와주는 함수
const auth = getAuth(firebase.firebaseApp);

// 소셜별로 객체 생성
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// 로그인 함수
// 로그인은 소셜 정보가 담긴 providerName을 인자로 받음
export const login = (providerName) => {
  const authProvider = getProvider(providerName);

  // signInWithPopup : 팝업창을 사용해 로그인 할 수 있게끔 호출
  return signInWithPopup(auth, authProvider);
};

// 로그아웃 함수
export const logout = () => {
  auth.signOut();
};

// 사용자의 로그인 여부를 확인하는 함수
export const onAuthChange = (onUserChanged) => {
  auth.onAuthStateChanged((user) => {
    onUserChanged(user);
  });
};

// 소셜로그인 종류에 따라
export const getProvider = (providerName) => {
  switch (providerName) {
    case "Google":
      return googleProvider;
    case "Github":
      return githubProvider;
    default:
      throw new Error(`not supported provider: ${providerName}`);
  }
};
