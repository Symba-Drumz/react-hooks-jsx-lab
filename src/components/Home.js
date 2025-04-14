import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const headStyle = {
    color: 'firebrick'
  };

  return (
    <div id="home">
      <h1 style={headStyle}>Alfa is a Web Developer from Nairobi</h1>
    </div>
  )
}

export default Home;
