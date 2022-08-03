import React from "react";
import { useEffect, useState } from "react";
import "./View.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({});
  const { studentid, courseid, name, phone, email, date_of_birth, address } =
    user;

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:2000/api/get/${id}`).then((res) => {
      setUser({
        ...res.data[0],
        // name: res.data.name,
        // email: res.data.email,
        // contact: res.data.contact,
      });
    });
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">User Contact Detail</div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Student ID:</strong>
          <span>{studentid}</span>
          <br />
          <br />
          <strong>Course Id:</strong>
          <span>{courseid}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{name}</span>
          <br />
          <br />
          <strong>Phone:</strong>
          <span>{phone}</span>
          <br />
          <br />
          <strong>Email:</strong>
          <span>{email}</span>
          <br />
          <br />
          <strong>Date of Birth:</strong>
          <span>{date_of_birth}</span>
          <br />
          <br />
          <strong>Address:</strong>
          <span>{address}</span>
          <br />
          <br />

          <Link to="/">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
