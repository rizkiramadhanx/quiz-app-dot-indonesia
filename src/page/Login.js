import { useState } from "react";
import User from "../data/user";

const Login = ({}) => {
  const [user, setUser] = useState();
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const isExist = User.filter(
      (e) => e.username === user.username && e.password === user.password
    );

    return isExist;
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="p-8 shadow-lg rounded-xl text-center bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-cyan-600 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-cyan-500">Login</h1>
            <h3 className="text-1xl font-semibold text-gray-500">
              Silahkan login!
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="text-left pt-3">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Email"
                  className="p-2 rounded-lg bg-gray-100 shadow-md focus:outline-none focus:border-2 border-cyan-500"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="block p-2 mt-3 rounded-lg bg-gray-100 shadow-md focus:outline-none focus:border-2 border-cyan-500"
                />
              </div>
              <button
                type="submit"
                className="bg-cyan-200 p-2 pr-5 pl-5 text-gray-800 font-semibold rounded-xl border-cyan-700 focus:ring-2 m-4"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
