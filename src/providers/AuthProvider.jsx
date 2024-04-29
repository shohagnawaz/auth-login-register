import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    // Create user from here
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In user from here
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const authInfo = {user, createUser, signInUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propType = {
    children: PropTypes.node
}