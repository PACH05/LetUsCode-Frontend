import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CodeMirror from "@uiw/react-codemirror";
import Question from "../components/Question";
import { useLocation, useNavigate } from 'react-router-dom';

function Test2() {
  const navigate = useNavigate();
  const { testId } = useLocation().state;
  const [testData, setTestData] = useState({});

  useEffect(() => {
    getApiData();
  }, [])

  async function getApiData() {
    try {
      const { data } = await axios.get("http://localhost:6000/api/test", {
        testId
      });
      if (data.message === "invalid-test-id") {
        alert("Baler Test ID Bal");
        navigate("/");
      } else {
        setTestData(data);
      }
    } catch (err) {
      console.log(err);
      alert("Blaer Test ID bal");
      navigate("/");
    }
  }

  return (
    <div>
      <div>
        <h1>Test id is {testData}</h1>
      </div>
    </div>
  )
}

export default Test2