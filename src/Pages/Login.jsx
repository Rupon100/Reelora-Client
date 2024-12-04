import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";

const Login = () => {

    const { setUser, loginUser, googleLogin } = useContext(authContext);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const userLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const pass =form.pass.value;
        const user = { email,pass };
        console.log(user);

        const passRegx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passRegx.test(pass)){
          setError(true);
          return;
        }
        setError(false);

        loginUser(email, pass)
        .then(result => {
          console.log(result.user);
          setUser(result.user);
          navigate('/')
        })
        .catch(error => {
          setError(true)
          console.log(error.message)
        })
    }

    const handleGoogle = () => {
      googleLogin()
        .then(result => {
          console.log(result.user);
          setUser(result.user);
          navigate('/')
        })
        .catch(error => {
          setError(true)
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

                <span className="text-xs font-semibold text-red-500">{error && 'Password must be 6+ characters with at least one uppercase and one lowercase letter.'}</span>
                {/* <span className="text-sm font-semibold text-red-500">{error && 'Login failed! Please try again!'}</span> */}

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