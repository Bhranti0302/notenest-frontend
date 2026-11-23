import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

import Logo from "../components/common/Logo";
import FormField from "../components/common/FormField";
import registerImage from "../assets/images/register-image.png";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await register(formData);

      // Show success popup
      toast.success(response.data.message || "Account created successfully!");

      // Redirect to login after successful registration
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1500);
    } catch (error) {
      // Show error popup
      toast.error(
        error.response?.data?.message ||
          "Registration failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Logo */}
      <div className="py-4">
        <Logo className="justify-center" />
      </div>

      <main className="flex flex-1 items-center justify-center py-6 sm:px-6">
        {/* Register Card */}
        <section className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-violet-100 shadow-lg md:grid-cols-2">
          {/* Illustration */}
          <div className="hidden items-center justify-center overflow-hidden p-4 md:flex">
            <img
              src={registerImage}
              alt="Register illustration"
              className="object-contain"
            />
          </div>

          {/* Register Form */}
          <div className="flex flex-col justify-center px-5 py-8 sm:px-10 md:px-8 lg:px-14 lg:py-10">
            {/* Heading */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Create Your Account
              </h2>

              <p className="mt-2 text-sm text-gray-600 sm:text-base">
                Join us and give your thoughts a place to grow.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full max-w-md flex-col gap-4"
            >
              <FormField
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

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
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Password Hint */}
              <p className="-mt-2 text-xs text-gray-500">
                Password must contain at least 8 characters.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-600 sm:text-base">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-violet-700 hover:text-violet-900"
              >
                Log In
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
