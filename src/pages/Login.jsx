import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../components/common/Logo";
import FormField from "../components/common/FormField";
import loginImage from "../assets/images/login-image.png";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Next: connect your login API
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Logo */}
      <div className="py-4">
        <Logo className="justify-center" />
      </div>

      <main className="flex flex-1 items-center justify-center px-4 py-6 sm:px-6 md:px-10">
        {/* Login Card */}
        <section className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-violet-100 shadow-lg md:grid-cols-2">
          {/* Illustration */}
          <div className="hidden items-center justify-center p-8 md:flex lg:p-12">
            <img
              src={loginImage}
              alt="Login illustration"
              className="h-auto w-full max-w-md object-contain"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col justify-center px-5 py-10 sm:px-10 md:px-8 lg:px-14 lg:py-16">
            {/* Heading */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Welcome Back!
              </h2>

              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Your thoughts, ideas, and notes are just one login away.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-md flex-col gap-5"
            >
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Forgot Password */}
              <div className="-mt-2 text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-violet-700 hover:text-violet-900"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-offset-4"
              >
                Login
              </button>
            </form>

            {/* Register Link */}
            <p className="mt-7 text-center text-sm text-gray-600 sm:text-base">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-violet-700 hover:text-violet-900"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
