import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, setError, error, updateInfo } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const profile = {
          displayName: data?.name,
        };
        updateInfo(profile)
          .then(() => {})
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err?.message));
  };
  return (
    <div className="flex justify-center items-center my-12">
      <div className="card shadow-2xl">
        <div className="card-body max-w-sm w-full">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Please enter valied info",
                  maxLength: 20,
                })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-600">{errors?.name?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                {...register("email", { required: "Please enter valied info" })}
                className="input input-bordered"
              />

              {errors.email && (
                <p className="text-red-600 text-alt">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: "Please enter valied info",
                  minLength: {
                    value: 8,
                    message: "Password should be 8 charecters or longer",
                  },
                  maxLength: {
                    value: 18,
                    message: "Password should be less then 18 charecters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                    message: "password should have Uppercase and number",
                  },
                })}
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600">{errors?.password?.message}</p>
              )}
              <label className="label">
                <Link to="/" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-1">
              {error && <span className="text-red-600">{error}</span>}
              <input
                type="submit"
                className="btn btn-secondary"
                value="SignUP"
              />
            </div>
          </form>
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
