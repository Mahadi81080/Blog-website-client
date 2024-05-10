import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";
 

 
export const AuthContext = createContext({});
// Social auth provider
const googleProvider =new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);
    // Creat user
    const creatUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        console.log("Current User", currentUser);
        if (currentUser) {
          axios
            .post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("Token response", res.data);
            });
        }
        else{
          axios.post(`${import.meta.env.VITE_API_URL}/logout`,loggedUser,{withCredentials:true})
          .then(res=>{
              console.log(res.data);
          })
        }
        setLoading(false);
      });
      return () => {
       return unSubscribe();
      };
    }, []);
    // SingIn account
    const singIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    //   LogOut
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    // Google LogIn
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    // GitHubLogIn
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
    // facebookLogIn
    const facebookLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, facebookProvider);
    };
  
    const authInfo = {
      user,
      loading,
      creatUser,
      singIn,
      logOut,
      googleLogin,
      githubLogin,
      facebookLogin,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;