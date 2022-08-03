import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  return (
    <div className="home" style={{ backgroundColor: "goldenrod" }}>
      <div style={{ backgroundColor: "lemonchiffon" }} className="bg-color">
        <Load />
      </div>
    </div>
  );
};
const Load = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/api/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://localhost:2000/api/remove/${id}`);
      toast.success("Deleted successfully");
      setTimeout(() => loading(), 100);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/addContact">
        <button className="btn btn-student">Add Student</button>
      </Link>
      <div style={{ overflowX: "auto" }}>
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Id
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>Name</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Phone
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Email
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Date of birth
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Location
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={item.id} className="t-body">
                    <th scope="row">{index + 1}</th>
                    <td>{item.studentid}</td>
                    <td>{item.courseid}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.address}</td>

                    <td>
                      <Link to={`/update/${item.id}`}>
                        <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button
                        className="btn btn-delete"
                        onClick={() => deleteContact(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/view/${item.id}`}>
                        <button className="btn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
