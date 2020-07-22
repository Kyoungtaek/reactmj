import React, { Fragment } from "react";
import "./App.css";

function App() {
  const name = "React";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div className='react'>{name}</div>
      <input />
      {/* Comment */}
    </>
  );
}

export default App;
