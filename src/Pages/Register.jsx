import { Link } from "react-router-dom";

 

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center flex-col gap-4 items-center">
            <h2 className="font-semibold text-xl md:text-4xl">Register Now!</h2>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-lg">
              <form className="card-body">
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