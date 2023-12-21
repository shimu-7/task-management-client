import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, username, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, username, photo)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);



    const authInfo = {
        user, loading, googleSignIn, logOut, createUser, logIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;