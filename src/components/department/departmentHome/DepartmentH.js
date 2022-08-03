import React from "react";
import { useState, useEffect } from "react";
import "./Department.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const DepartmentH = () => {
  return (
    <div className="bg-color home">
      <Load />
    </div>
  );
};
const Load = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/department/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://localhost:2000/department/remove/${id}`);
      toast.success("Deleted successfully");
      setTimeout(() => loading(), 100);
    }
  };

  return (
    // search fields
    <div style={{ marginTop: "150px" }}>
      <Link to="/addDepartment">
        <button className="btn btn-student">Add DepartmentInfo</button>
      </Link>
      <div>
        <input
          style={{ width: "35%", height: "25px" }}
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                DepartmentID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                DepartmentName
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                DepartmentPhone
              </th>
              {/* <th style={{ textAlign: "center", paddingLeft: "15px" }}>Phone</th> */}
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                DepartmentEmail
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) =>
                item.departmentName.toLowerCase().includes(search)
              )
              .map((item, index) => {
                return (
                  <>
                    <tr key={item.id} className="t-body">
                      <th scope="row">{index + 1}</th>
                      <td>{item.departmentId}</td>
                      <td>{item.departmentName}</td>
                      <td>{item.departmentPhone}</td>
                      <td>{item.departmentEmail}</td>

                      <td>
                        <Link to={`/addDepartment/${item.id}`}>
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

export default DepartmentH;
