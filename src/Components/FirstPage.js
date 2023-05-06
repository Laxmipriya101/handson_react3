import React, { useState } from "react";

function FirstPage({ onSubmit }) {
  const [formState, setFormState] = useState({
    name: "",
    department: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleChangeState = () => {
    onSubmit(formState);
    setFormState({ name: "", department: "", rating: "" });
    console.log(formState.name, formState.department, formState.rating.length);
  };

  const emptyForm =
    !formState.name || !formState.department || !formState.rating;

  return (
    <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div className="MainContainer">
        <form>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            placeholder="enter name"
            onChange={handleChange}
            className="inputText"
          />
          <br />
          <label>Department :</label>
          <input
            type="text"
            name="department"
            placeholder="enter department"
            value={formState.department}
            onChange={handleChange}
            className="inputText"
          />
          <br />
          <label>Rating :</label>
          <input
            type="number"
            name="rating"
            value={formState.rating}
            placeholder="enter rating"
            onChange={handleChange}
            className="inputText"
          />
          <br />

          <button
            onClick={handleChangeState}
            disabled={emptyForm}
            type="button"
          >
            Submit
          </button>
        </form>
        <br />
      </div>
    </>
  );
}

export default FirstPage;
