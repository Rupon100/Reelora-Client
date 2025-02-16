import { createContext, useEffect, useState } from "react";
import { auth } from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const authContext = createContext(null)

const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [logedUser, setLogedUser] = useState(null);
    const [movies, setMovies] = useState([]);
    const [favmovie, setFavmovie] = useState([]);
    const [isLight, setisLight] = useState([]);
    const [genre, setGenre] = useState([]);
     
    const registerUser = (email,pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider);
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    const info = {
        logedUser,
        setLogedUser,
        isLight,
        setisLight,
        genre,
        setGenre,
        user,
        setUser,
        loading, 
        setLoading,
        movies,
        setMovies,
        favmovie,
        setFavmovie,
        logout,
        registerUser,
        loginUser,
        googleLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])

    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;