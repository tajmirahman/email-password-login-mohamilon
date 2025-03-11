import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
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

    // onAuthStateChanged(auth, currentUser=>{
    //     if(currentUser){
    //         console.log('current user is', currentUser);
    //         setUser(currentUser);
    //     }
    //     else{
    //         console.log('no user logged in');
    //         setUser(null);
    //     }
    // })

    const authRef = {
        name,
        user,
        createUser,
        signInUser
    }


    return (
        <AuthContext.Provider value={authRef}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;