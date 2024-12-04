import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
 

const Register = () => {

    const { registerUser,googleLogin, setUser } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const createUser = (e) => {
      e.preventDefault();
      const form = e.target;
      const name =form.name.value;
      const email =form.email.value;
      const photo =form.photo.value;
      const pass =form.pass.value;
      const user = { name, email, photo, pass };
      console.log(user)

      const passRegx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if(!passRegx.test(pass)){
        setError(true);
        return;
      }
      setError(false);

      registerUser(email, pass)
      .then(result => {
        console.log(result.user)
        navigate('/');
      })
      .catch(error => {
        console.log(error.message)
        setError(true)
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
        <div className="min-h-screen m-4 flex justify-center flex-col gap-4 items-center">
            <h2 className="font-semibold text-xl md:text-4xl">Register Now!</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
              <form onSubmit={createUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input type="text" placeholder="photoURL" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="pass" className="input input-bordered" required />
                </div>

                <span className="text-xs font-semibold text-red-500">{error && 'Password must be 6+ characters with at least one uppercase and one lowercase letter.'}</span>

                <div className="form-control mt-6">
                  <button className="bg-gray-800 p-2 rounded text-white hover:bg-gray-900 transition-all">Register</button>
                  <div className="divider">OR</div>
                  <button onClick={handleGoogle} type="button" className="flex justify-center items-center gap-3 border p-2 rounded hover:bg-gray-800 hover:text-white transition-all"><FcGoogle /> <h3>Google</h3></button>
                </div>
                <small className="mt-2">Have an account? <Link to='/login' className="font-semibold">Login</Link></small>
              </form>
            </div>
        </div>
    );
};

export default Register;