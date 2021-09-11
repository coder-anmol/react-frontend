import React from "react";

function Contact() {
  return (
    <section className="relative flex justify-center h-52 lg:h-64">
      <div className="absolute flex flex-col items-center justify-between w-10/12 h-64 py-8 text-center text-white shadow-2xl rounded-3xl bg-custom-dark top-16 lg:flex-row lg:px-16 lg:h-40 lg:top-44 xl:px-24 2xl:px-32">
        <h5 className="font-mono text-2xl font-bold xl:text-3xl">
          Start A Project
        </h5>
        <p className="xl:text-lg">
          Interested in working together?
          <br /> We should queue up a chat.
        </p>
        <a
          className="inline-block max-w-max btn xl:text-xl"
          href="http://anmolsharma.me"
        >
          Let's Do This
        </a>
      </div>
    </section>
  );
}

export default Contact;
