import { createContext } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authRef = {
        name: 'sagor nodi er milon'
    }


    return (
        <AuthContext.Provider value={authRef}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;