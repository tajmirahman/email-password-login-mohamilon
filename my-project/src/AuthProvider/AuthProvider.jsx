import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const name = "Nahid er vi shahid"

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authRef = {
        name,
        createUser
    }


    return (
        <AuthContext.Provider value={authRef}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;