import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    const {loginForm} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        loginForm(email,password)
        .then( result => {
            const user = result.user
            const loggedUser = {
              email: user.email
            }
            if(user){
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
            
            fetch('http://localhost:3000/jwt',{
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(loggedUser)
            })
            .then( res => res.json())
            .then( data => {
              console.log('jwt token',data)
              // Warning: local storage is not good way
              localStorage.setItem('access-token', data.token)
              navigate(from, {replace: true})
            })
           
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center mt-2">Do you want <Link className="border border-b-2" to='/register'> Register?</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
