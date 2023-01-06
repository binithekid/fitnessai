// import React, { useState } from "react";
import AgeGender from "./Steps/AgeGender";
import Path from "./Steps/Path";
import Weight from "./Steps/Weight";

const UserData = () => {
  // const [response, setResponse] = useState("");
  // const [selectedGender, setSelectedGender] = useState("");

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   fetch("http://localhost:3001", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       age,
  //       selectedGender,
  //       currentWeight,
  //       desiredWeight,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setResponse(data.message));
  // };

  return (
    <div className='App'>
      <Path />
      <AgeGender />
      <Weight />
      {/* <form onSubmit={handleSubmit} className='form'> */}

      {/* <label>
        How long do you want this work plan:
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}>
          <option value=''>Select one</option>
          <option value='day'>Day</option>
          <option value='week'>Week</option>
          <option value='month'>Month</option>
        </select>
      </label> */}
      <button type='submit'>Submit</button>
      {/* </form> */}
      {/* <div className='response'>{response}</div> */}
    </div>
  );
};

export default UserData;
