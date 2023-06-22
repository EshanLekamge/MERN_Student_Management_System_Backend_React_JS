import React from "react";
import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [address, setAddress] = useState("");
  const [contactNo, setContactno] = useState("");
  const [school, setSchool] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender,
      address,
      contactNo,
      school,
    };

    axios
      .post("http://localhost:8070/student/addStudent", newStudent)
      .then(() => {
        alert("Student Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Gender
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              onClick={() => {
                setGender("male");
              }}
            />
            <label class="form-check-label" for="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              checked
              onClick={(e) => {
                setGender("female");
              }}
            />
            <label class="form-check-label" for="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="contactNo" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contactNo"
            placeholder="Enter contact Number"
            onChange={(e) => {
              setContactno(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="school" className="form-label">
            School
          </label>
          <input
            type="text"
            className="form-control"
            id="school"
            placeholder="Enter School"
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
