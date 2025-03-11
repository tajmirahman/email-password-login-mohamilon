import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser]=useState(null)

    const name = "Nahid er vi shahid"

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser=()=>{
        signOut(auth)
    }

    useEffect(()=>{
       const unSubsCribe= onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                console.log('User log in', currentUser);
                setUser(currentUser);
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
        name,
        user,
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