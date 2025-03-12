import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

   

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
                console.log('user sign out', currentUser)
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
        signOutUser
    }


    return (
        <AuthContext.Provider value={authRef}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;