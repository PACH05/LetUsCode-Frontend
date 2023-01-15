import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [query, setQuery] = useState("")
  return (
    <div>
    <div className=" m-4 p-4 w-2/4">
    <input
      type="text"
      className="search-bar"
      placeholder="Enter Test Id"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
    />
    <button><Link to="/test" state={{ testid: query }}>Enter Test</Link></button>
    </div>
  </div>

  )
}

export default Home