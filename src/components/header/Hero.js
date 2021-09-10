import React from "react";

function Hero() {
  return (
    <section className="font-mono">
      {/* Hero Title and Text */}
      <h2 className="px-5 mt-8 text-3xl font-bold text-center capitalize sm:text-4xl sm:mt-10 xl:text-5xl">
        Programmer & Front-End Developer
      </h2>
      <p className="text-lg text-center text-gray-700 capitalize px-9 mt-7 sm:text-lg sm:mt-12 xl:text-xl">
        I design and code beautifully simple things, and I love what I do
      </p>

      {/* profile image */}
      <img
        src="mf-avatar.svg"
        alt="profile"
        className="mx-auto my-12 w-52 sm:w-60 xl:w-64"
      />

      {/* design image */}
      <img
        src="hero.svg"
        alt="hero"
        className="w-11/12 px-5 py-2 mx-auto sm:w-10/12 lg:w-8/12 2xl:w-2/4 2xl:px-24"
      />
    </section>
  );
}

export default Hero;
