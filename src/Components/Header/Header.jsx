import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../provider/Authprovider";


const Header = () => {
    const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/Login"}>Log In</NavLink></li>
    <li><NavLink to={"/register"}>Register</NavLink></li>
    </>
    const {user,logOut}=useContext(authContext);


    const handleLogOut = ()=>{
        console.log("singout");
        logOut()
        .then(result=>{
            console.log("Log Out Successfully!")
        })
        .catch((error)=>{
            console.log(error.message)
        })

    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className="btn">Sing out</button>
                    </>
                    :<Link to={"/login"}><button className="btn">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default Header;