'use client'
import { app } from "@/config/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from 'react';

export const AuthUser = createContext();
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    // console.log(user);

    const GoogleLogin = () => signInWithPopup(auth, provider);
    const loginEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const CreateUserEP = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const logout = () => signOut(auth);
    const updateProfilePic = (name, photo) =>
        updateProfile(auth.currentUser,
            { displayName: name, photoURL: photo })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser.displayName);
            setLoading(false)
            setUser(currentUser)
        })
        return () => unSubscribe()
    }, [])
    // console.log(user.email);

    const authInfo = {
        user, setUser,
        loading, setLoading,
        GoogleLogin, loginEmail,
        logout,
        updateProfilePic, CreateUserEP,
    }
    return (
        <AuthUser.Provider value={authInfo}>
            {children}
        </AuthUser.Provider>
    );
};

export const useFirebaseInfo = () => {
    const context = useContext(AuthUser);
    return context
}

export default FirebaseProvider;