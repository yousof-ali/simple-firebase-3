import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Components/firebase/firebase.config";

export const authContext = createContext(null);

const Authprovider = ({children}) => {

    const [user,setUser]=useState(null);
    
    const creatUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authinfo = {user,creatUser,loginUser};
    return (
        <authContext.Provider value={authinfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;