import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const googleProvider= new GoogleAuthProvider();
   

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser=()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
       const unSubsCribe= onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                console.log('User log in', currentUser);
                setUser(currentUser);
                setLoading(false);
            }
            else{
                console.log('user sign out', currentUser);
                setLoading(false)
            }
        });


        return ()=>{
            unSubsCribe();
        }


    },[])


    const authRef = {
  
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    }


    return (
        <AuthContext.Provider value={authRef}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;