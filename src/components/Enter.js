import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Enter() {
    const [query, setQuery] = useState("");
  return (
    <div className='my-3 bg-gray-200 w-72'>
        <div className="m-4 p-2 bg-gray-200">
        <h1 className="text-xl">Enter a Test</h1>
        <br />
        <h2>Enter the Test ID shared by your teacher/interviewer and start taking the Test now. Read the question prompt and write some code to solve the question.</h2>
        <br />
        <div className="flex justify-center">
        <input
          type="text"
          className="flex align-middle p-2 rounded-l w-half h-10"
          placeholder="Enter Test Id"
          onChange={(e) => setQuery(e.target.value)}
          value={query} 
        />
        </div>     
        <div className="flex justify-center">
        <button className='flex justify-center align-middle m-4 bg-black text-white rounded-xl w-32 h-7'>
          <Link to state={{ testid: query }}>
            Enter Test
          </Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Enter