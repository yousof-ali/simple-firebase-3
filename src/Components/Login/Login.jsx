import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/Authprovider";


const Login = () => {
    const {loginUser} = useContext(authContext);
    console.log(loginUser);
    const handleLogin = e =>{
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log(userEmail,userPassword);


        loginUser(userEmail,userPassword)
        .then(result=>{
            console.log("success!");
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-sm">Are you New?
                            <Link to={"/register"}><button className="btn btn-link">Register</button></Link>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;