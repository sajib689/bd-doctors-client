import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Register = () => {
    const {signUpForm} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        // const displayName = form.displayName.value 
        const email = form.email.value
        const password = form.password.value
        signUpForm(email,password)
        .then( result => {
            const user = result.user
            if(user) {
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Register Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
        .catch(error => {
            if(error) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
              })
            }
        });
        form.reset()
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="displayName"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center mt-2">
                Are you have an account?{" "}
                <Link className="border border-b-2" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
