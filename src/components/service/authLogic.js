import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
class AuthLogic {
  constructor() {
    this.firebaseAuth = getAuth()
    this.googleProvider = new GoogleAuthProvider()
    //this.githubProvider = new GithubAuthProvider()
  }
  login(providerName) {
    const authProvider = this.getProvider(providerName)
    //return signInWithPopup(this.firebaseAuth, authProvider);
    return signInWithPopup(this.firebaseAuth, authProvider)
  }

  logout() {
    this.firebaseAuth.signOut()
  }

  onAuthChange(onUserChanged) {
    this.firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user)
    })
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider
      case "Github":
        return this.githubProvider
      default:
        throw new Error(`not supported provider: ${providerName}`)
    }
  }  
}

export default AuthLogic;
