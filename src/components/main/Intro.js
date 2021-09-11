import React from "react";

function Intro() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white capitalize bg-purple-500 h-96">
      <h2 className="px-2 mb-10 font-mono text-xl font-bold md:text-2xl xl:text-3xl">
        Hi, I’m Anmol. Nice to meet you.
      </h2>
      <p className="px-8 font-mono text-sm md:text-lg lg:px-20 xl:px-32 xl:text-xl 2xl:px-64">
        Started learning programming 5 years ago. I want to learn Computer
        Science as much as I can . I'm quiet confident, naturally curious, and
        perpetually working on improving my problem solving and design skills at
        this time.
      </p>
    </section>
  );
}

export default Intro;
