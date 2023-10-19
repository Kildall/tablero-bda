import React, { ChangeEvent } from "react";
import { useRouter } from "next/router";
import Login from "@/app/login";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const HandleSetPassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const HandleSetEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const setLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Email: " + email);
    console.log("Password: " + password);

    const token = btoa(`${email}:${password}`);
    const authHeader = `Basic ${token}`;

    try {
      const response = await fetch("/api/login", {
        method: "POST", // o el método que corresponda
        headers: {
          Authorization: authHeader,
        },
      });

      if (response.ok) {
        // La autenticación fue exitosa, continúa con la lógica de tu aplicación
        router.push("/dashboard");
      } else {
        // La autenticación falló, maneja el error
        alert("Incorrect login details.");
      }
    } catch (error) {
      // Maneja errores de red u otros errores aquí
      console.log(`Se ha producido un error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center md:flex-row md:h-screen w-screen">
      <div className="flex items-center justify-center w-full md:w-1/2"></div>
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block font-bold text-gray-700">
                Email address
              </label>
              <input
                value={email}
                onChange={HandleSetEmail}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-bold text-gray-700"
              >
                Password
              </label>
              <input
                value={password}
                onChange={HandleSetPassword}
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
                onClick={setLogin}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
