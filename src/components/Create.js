import React from "react";
import { Link } from "react-router-dom";


function Create() {
  return (
      <div className="my-3 p-4 bg-gray-200 w-72">
        <h1 className="text-xl">Create a New Test</h1>
        <br />
        <h2>
            Create a test describing it and adding a few examples.The platform is designed for a typical coding interview where some code will be written based on a question prompt.
            Add Examples/Test Cases and output within the Question body.
        </h2>
        <br />
        <div className="flex justify-center">
        <button className=" flex justify-center align-middle bg-black rounded-xl text-white w-32 h-7">
        <Link to="/createtest">
            Create New Test
          </Link>
        </button>
        <br />

        </div>
      </div>
  );
}

export default Create;
