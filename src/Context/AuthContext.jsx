import { createContext, useState } from "react";
import { auth } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

export const authContext = createContext(null)

const AuthContext = ({ children }) => {
    
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
     
    const registerUser = (email,pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }

    const info = {
        user,
        setUser,
        loading, 
        setLoading,
        registerUser,
        loginUser,
        googleLogin
    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;