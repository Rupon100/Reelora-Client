import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

const Login = () => {

    const { setUser, loginUser, googleLogin } = useContext(authContext);

    const userLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const pass =form.pass.value;
        const user = { email,pass };
        console.log(user);


        loginUser(email, pass)
        .then(result => {
          console.log(result.user);
          setUser(result.user);
        })
        .catch(error => {
          console.log(error.message)
        })
    }

    const handleGoogle = () => {
      googleLogin()
        .then(result => {
          console.log(result.user);
          setUser(result.user);
        })
        .catch(error => {
          console.log(error.message)
        })
    }


    return (
        <div className="min-h-screen flex justify-center flex-col gap-4 m-4 items-center">
            <h2 className="font-semibold text-xl md:text-4xl">Login Now!</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
              <form onSubmit={userLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="bg-gray-800 p-2 rounded text-white hover:bg-gray-900 transition-all">Login</button>
                  <div className="divider">OR</div>
                  <button onClick={handleGoogle} type="button" className="flex justify-center items-center gap-3 border p-2 rounded hover:bg-gray-800 hover:text-white transition-all"><FcGoogle /> <h3>Google</h3></button>
                </div>
                <small className="mt-2">New in this website? <Link to='/register' className="font-semibold">Register</Link></small>
              </form>
            </div>
        </div>
    );
};

export default Login;