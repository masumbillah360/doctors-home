import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, setUser, setError } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center md:my-32">
      <div className="card shadow-2xl">
        <div className="card-body max-w-sm">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email")}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password")}
                className="input input-bordered"
              />
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-1">
              <input
                type="submit"
                value="Login"
                className="btn btn-secondary"
              />
            </div>
          </form>
          <p className="label-text-alt">
            New to doctor's Home ?
            <Link className="text-primary text-sm" to="/signup">
              create an account
            </Link>
          </p>
          <h4 className="divider m-0">OR</h4>
          <div className="form-control">
            <button className="btn btn-outline btn-primary">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
