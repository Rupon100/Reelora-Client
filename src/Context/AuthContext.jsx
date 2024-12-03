import { createContext } from "react";

export const authContext = createContext(null)

const AuthContext = ({ children }) => {
    const info = {
        name: "Rupon"
    }
    return (
        <authContext value={info}>
            {children}
        </authContext>
    );
};

export default AuthContext;