import React from "react";
import { useState, useEffect } from "react";
import "./Inner.css";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import axios from "axios";

const Inner = () => {
  return (
    //className="bg-color"
    <div style={{ backgroundColor: "lemonchiffon" }}>
      <div className="inner">
        <div>
          <h2 className="Inner">Inner Join</h2>
          <Load />
        </div>
        <div>
          <h2 className="Inner">Left Join</h2>
          <LeftJoining />
        </div>
        <div>
          <h2 className="Inner">Right Join</h2>
          <RightJoining />
        </div>
        <div>
          <h2 className="Inner">Self Join</h2>
          <SelfJoining />
        </div>
        <div>
          <h2 className="Inner">Cross Join</h2>
          <Cross />
        </div>
        <div>
          <h2 className="Inner"> Joining</h2>
          <Joining />
        </div>
        <div>
          <h2 className="Inner"> Count</h2>
          <Count />
        </div>
      </div>
    </div>
  );
};
const Load = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/innerjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  //   const deleteContact = (id) => {
  //     if (window.confirm("Are you sure you want to delete this item?")) {
  //       axios.delete(`http://localhost:2000/course/remove/${id}`);
  //       toast.success("Deleted successfully");
  //       setTimeout(() => loading(), 100);
  //     }
  //   };

  return (
    <div style={{ marginTop: "150px" }}>
      {/* <Link to="/CourseMe">
        <button className="btn btn-contact">Add Course</button>
      </Link> */}
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>Name</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Phone
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Email
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Date of Birth
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Address
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course ID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Code
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Semester
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department id
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department phone
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Email
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
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.address}</td>
                    <td>{item.coursetitle}</td>
                    <td>{item.courseid}</td>
                    <td>{item.coursecode}</td>
                    <td>{item.semester}</td>
                    <td>{item.departmentName}</td>
                    <td>{item.departmentId}</td>
                    <td>{item.departmentPhone}</td>
                    <td>{item.departmentEmail}</td>
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
const Joining = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/join/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
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
                    <td>{item.name}</td>
                    <td>{item.departmentName}</td>
                    <td>{item.coursetitle}</td>
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
const LeftJoining = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/leftjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>Name</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Phone
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Email
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Date of Birth
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Address
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course ID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Code
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Semester
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department id
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department phone
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Email
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
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.address}</td>
                    <td>{item.coursetitle}</td>
                    <td>{item.courseid}</td>
                    <td>{item.coursecode}</td>
                    <td>{item.semester}</td>
                    <td>{item.departmentName}</td>
                    <td>{item.departmentId}</td>
                    <td>{item.departmentPhone}</td>
                    <td>{item.departmentEmail}</td>
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
const RightJoining = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/rightjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>Name</th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Code
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Email
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department phone
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
                    <td>{item.name}</td>

                    <td>{item.coursetitle}</td>

                    <td>{item.coursecode}</td>

                    <td>{item.departmentName}</td>
                    <td>{item.departmentEmail}</td>
                    <td>{item.departmentPhone}</td>
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
const SelfJoining = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/selfjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student Name
              </th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={item.id} className="t-body">
                    <th scope="row">{index + 1}</th>

                    <td>{item.name}</td>
                    <td>{item.departmentName}</td>
                    <td>{item.coursetitle}</td>
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

const Cross = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/crossjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>

              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Title
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Course Code
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Name
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Email
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Department Phone
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
                    <td>{item.coursetitle}</td>
                    <td>{item.coursecode}</td>

                    <td>{item.departmentName}</td>
                    <td>{item.departmentEmail}</td>
                    <td>{item.departmentPhone}</td>
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
const Count = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/countjoin/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{
          overflowX: "auto",
        }}
      >
        <table className="style-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Count Semester
              </th>
              <th style={{ textAlign: "center", paddingLeft: "15px" }}>
                Count Semester
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <>
                  <tr key={item.id} className="t-body">
                    <th scope="row">{index + 1}</th>

                    <td>{item.semester}</td>
                    <td>{item.countSemester}</td>
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

export default Inner;
