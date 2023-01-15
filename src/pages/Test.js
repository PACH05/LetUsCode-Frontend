import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import Question from "../components/Question";
import { useLocation } from "react-router-dom";
import axios from "axios";

async function getQuestion(tid){
  const res = await axios.post("http://localhost:6000/api/test",{
    testID : tid
  })
   return res
}


function isValid(res) {
    if(res.message === "invalid-test-id"){
      return false;
    }
    else return true;
}

function Test() {
    const location = useLocation()
    const { testid } = location.state
    console.log(testid);
    const res = getQuestion(testid)
    console.log(res);
    let flag = isValid(res)

    const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  console.log(flag)
  if(flag){
    return (
    <div className="flex justify-between my-10 p-1">
    <div className="w-2/4">
        <Question />
    </div>
  <div className="flex justify-center top-7 bottom-7 left-10 right-10 text-left">
    <CodeMirror
      value="console.log('hello world!');"
      height="500px"
      width="750px"
      onChange={onChange}
    />
  </div>
</div>
     );
  }
  else{
    return(
      <h1>Invalid Test ID</h1>
    );
  } 
}


export default Test;
