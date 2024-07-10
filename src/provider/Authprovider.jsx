import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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

    useEffect(()=>{
        const unSubcribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return () =>{
            unSubcribe();
        }
    },[])

    const logOut=()=>{
        return signOut(auth);
    }
    const authinfo = {user,creatUser,loginUser,logOut};
    return (
        <authContext.Provider value={authinfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authprovider;