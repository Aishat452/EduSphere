import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import Link from "next/link";
import usePasswordVisibility from "../helpers/utils";
import useAuth from "../hooks/useAuth";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

import Spinner from "../components/Spinner";
import { useRouter } from "next/navigation";
// import { auth } from "../firebase";

const StudentLogin = () => {
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();
  const { password, setPassword, email, setEmail, loading, loginUser } =
    useAuth();
  const router = useRouter();
  const auth = getAuth();
  



  const studentlogin = async (email, password) => {
    if (email.length === 0) {
      toast.error("Enter your Email Address");
    } else if (password.length === 0) {
      toast.error("Enter your Password");
    } else {
      loginUser(email, password);
    }
  };

  return (
    <div className="w-full lg:w-5/12 font-mono bg-white p-5 rounded-lg mx-auto">
      <h3 className="pt-4 text-2xl text-center">
        Login As a Student!
      </h3>
      <form
        className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
      >
        <div className="mb-4 md:flex md:justify-between"></div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            for="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="md:ml-2">
            <label
              class="block mb-2 text-sm font-bold text-gray-700"
              for="c_password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="c_password"
              type={passwordVisible ? "text" : "password"}
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6 text-center">
        <Link href="/Profile">
          <button
            className="w-full px-4 py-2 font-bold text-black bg-[#00df9a] rounded-full hover:bg-[#47ffc5] focus:outline-none focus:shadow-outline"
            type="submit"
            // onSubmit={studentlogin}
            onClick={(e) => {
              e.preventDefault();
              studentlogin(email, password);
            }}

          >
            {loading ? <Spinner /> : "Login"}

          </button>
          </Link>

        </div>
        <hr className="mb-6 border-t" />
        <div className="text-center">
          <Link
            href="#"
            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="text-center">
          <Link
            href="/Signup"
            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
          >
            Don't Have an Account? SignUp!
          </Link>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
