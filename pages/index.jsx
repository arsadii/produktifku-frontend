import React from "react";
import Hero from "../components/Hero";
import Guest from "../layouts/Guest";

export default function Home() {
  return (
    <Guest title="Home">
      <div className="container h-screen">
        <Hero />
      </div>
    </Guest>
  );
}
