import app from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./config";
import { selectRandomAvatar } from "../utils/userAvatars";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.googleProvider.setCustomParameters({
      prompt: "select_account"
    });
    this.gitHubProvider = new app.auth.GithubAuthProvider();
  }

  async register(name, email, password) {
    const newUser = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    return await newUser.user.updateProfile({
      displayName: name,
      photoURL: `${
        process.env.PUBLIC_URL
      }/images/avatars-animal/${selectRandomAvatar()}`
    });
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email) {
    return await this.auth.sendPasswordResetEmail(email);
  }

  async googleLogin() {
    return await this.auth.signInWithRedirect(this.googleProvider);
  }

  async gitHubLogin() {
    return await this.auth.signInWithRedirect(this.gitHubProvider);
  }

  async logout() {
    return await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
