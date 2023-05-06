import React, { useState } from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";

function MainPage() {
  const [show, setShow] = useState(true);
  const [allFormState, setAllFormState] = useState([]);

  const handleSubmit = (formData) => {
    const tempObj = [...allFormState];
    tempObj.push(formData);
    setAllFormState(tempObj);
    console.log(formData);
    setShow(!show);
  };

  const pageHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <FirstPage onSubmit={handleSubmit} />
      ) : (
        <div>
          <SecondPage data={allFormState} />
          <button onClick={pageHandler}>Go Back</button>
        </div>
      )}
      <br />
      <br />
    </div>
  );
}

export default MainPage;
