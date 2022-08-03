import React from "react";
import { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({});
  const { departmentId, departmentName, departmentPhone, departmentEmail } =
    user;

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:2000/department/get/${id}`).then((res) => {
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
          <strong>Department ID:</strong>
          <span>{departmentId}</span>
          <br />
          <br />
          <strong>Department Name:</strong>
          <span>{departmentName}</span>
          <br />
          <br />
          <strong>Department Phone:</strong>
          <span>{departmentPhone}</span>
          <br />
          <br />
          <strong>Department Email:</strong>
          <span>{departmentEmail}</span>
          <br />
          <br />

          <Link to="/department">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
