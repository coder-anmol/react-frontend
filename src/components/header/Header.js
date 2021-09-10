import React from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      {/* navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />
    </header>
  );
}

export default Header;
