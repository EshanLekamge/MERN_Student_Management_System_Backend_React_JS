import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("female");
  const [address, setAddress] = useState("");
  const [contactNo, setContactno] = useState("");
  const [school, setSchool] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    console.warn(params);
    axios
      .get(`http://localhost:8070/student/getStudent/${params.id}`)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setGender(res.data.gender);
        setAddress(res.data.address);
        setContactno(res.data.contactNo);
        setSchool(res.data.school);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function updateData(e) {
    e.preventDefault();

    const updateStudent = {
      name,
      age,
      gender,
      address,
      contactNo,
      school,
    };

    axios
      .put(
        `http://localhost:8070/student/updateStudent/${params.id}`,
        updateStudent
      )
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={updateData}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            value={name}
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
            value={age}
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
            value={address}
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
            value={contactNo}
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
            value={school}
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

export default UpdateStudent;
