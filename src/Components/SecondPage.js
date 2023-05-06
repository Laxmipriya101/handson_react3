import React from "react";

const SecondPage = ({ data }) => {
  return (
    <>
      <h1>EMPLOYEE FEEDBACK DATA</h1>
      <br />
      <br />
      <br />
      <div className="smallContainer">
        <div className="containerBox">
          {data.map((value, index) => {
            return (
              <div className="boxes" key={index}>
                Name: {value.name} | Department : {value.department} | Rating :
                {value.rating}
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SecondPage;
