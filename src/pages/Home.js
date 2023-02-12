import React from "react";
import Create from "../components/Create";
import Enter from "../components/Enter";
import Navbar from "../components/Navbar";
import Practice from "../components/Practice";

function Home() {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
        <h1 className="my-4 mx-4 text-2xl">Welcome, Let Us Code!!</h1>
        <div className="flex flex-row justify-evenly">
        <Create />
        <Enter />
        </div>
        <Practice />
      </div>
    </div>
  );
}

export default Home;
