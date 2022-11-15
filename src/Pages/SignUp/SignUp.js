import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="card shadow-2xl">
        <div className="card-body max-w-sm w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
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
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-1">
            <button className="btn btn-secondary">Sign UP</button>
          </div>
          <p className="label-text-alt">
            Already Have an account?
            <Link className="text-primary" to="/login">
              Login Here!
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

export default SignUp;
