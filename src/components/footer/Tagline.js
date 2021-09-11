import React from "react";

function Tagline() {
  return (
    <section className="font-mono text-xl text-center text-white capitalize bg-purple-500 h-96 lg:text-2xl">
      <p className="px-16 pt-48">
        Living, learning, <br className="lg:hidden" />& leveling up <br />
        one day at a time.
      </p>
      <p className="px-12 text-sm pt-9 lg:text-lg">
        Handcrafted by me &copy; Anmol Sharma{" "}
        {new Date().getFullYear().toString()}
      </p>
    </section>
  );
}

export default Tagline;
