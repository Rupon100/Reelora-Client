import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
 

const Register = () => {

    const { registerUser } = useContext(authContext);


    const createUser = (e) => {
      e.preventDefault();
      const form = e.target;
      const name =form.name.value;
      const email =form.email.value;
      const photo =form.photo.value;
      const pass =form.pass.value;
      const user = { name, email, photo, pass };
      console.log(user)

      registerUser(email, pass)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
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
                <div className="form-control mt-6">
                  <button className="bg-gray-800 p-2 rounded text-white hover:bg-gray-900 transition-all">Register</button>
                </div>
                <small className="mt-2">Have an account? <Link to='/login' className="font-semibold">Login</Link></small>
              </form>
            </div>
        </div>
    );
};

export default Register;