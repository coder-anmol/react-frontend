import React from "react";
import Intro from "./Intro";
import Tools from "./Tools";
import Projects from "./Projects";

function Main() {
  return (
    <section className="border-t-2 border-b-2">
      {/* Intro Component */}
      <Intro />

      {/* Tools Component */}
      <Tools />

      {/* Projects Component */}
      <Projects />
    </section>
  );
}

export default Main;
