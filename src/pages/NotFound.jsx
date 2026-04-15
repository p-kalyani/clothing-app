import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/notfound.json";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-orange-100 to-pink-100 text-center px-4">

      <div className="w-64 sm:w-80">
        <Player
          autoplay
          loop
          src={animationData}
        />
      </div>

      <h1 className="text-4xl font-bold text-red-500">
        404 Not Found
      </h1>

      <p className="text-gray-600 mt-2">
        Page is dancing somewhere 💃
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full"
      >
        🏠 Go Home
      </Link>

    </div>
  );
};

export default NotFound;