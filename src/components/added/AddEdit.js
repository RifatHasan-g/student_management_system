import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AddEdit.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AddEdit = () => {
  return (
    <div>
      <AddUser />
    </div>
  );
};

const initialState = {
  studentid: "",
  name: "",
  phone: "",
  email: "",
  date_of_birth: "",
  address: "",
  courseid: "",
};

const AddUser = () => {
  const [state, setState] = useState(initialState);
  const { studentid, name, phone, email, date_of_birth, address, courseid } =
    state;
  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/api/get/${id}`).then((res) => {
      setState({
        ...res.data[0],
        // name: res.data.name,
        // email: res.data.email,
        // contact: res.data.contact,
      });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !studentid ||
      !name ||
      !phone ||
      !email ||
      !date_of_birth ||
      !address ||
      !courseid
    ) {
      toast.error("Please fill all the fields");
    } else {
      if (id) {
        axios
          .put(`http://localhost:2000/api/update/${id}`, {
            studentid,
            name,
            phone,
            email,
            date_of_birth,
            address,
            courseid,
          })
          .then(() => {
            setState({
              studentid: "",
              name: "",
              phone: "",
              email: "",
              date_of_birth: "",
              address: "",
              courseid: "",
            });
          })
          .catch((err) => toast.error(err.response.data));

        toast.success("Updated successfully");
      } else {
        axios
          .post("http://localhost:2000/api/post", {
            studentid,
            name,
            phone,
            email,
            date_of_birth,
            address,
            courseid,
          })
          .then(() => {
            setState({
              studentid: "",
              name: "",
              phone: "",
              email: "",
              date_of_birth: "",
              address: "",
              courseid: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("added successfully ");
      }

      setTimeout(() => history("/"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="inputfield">
      <form onSubmit={handleSubmit}>
        <div className="label">
          <div style={{ marginRight: "98px" }}>
            <label htmlFor="studentid">Student ID</label>
          </div>

          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type=""
            name="studentid"
            id=" studentid"
            placeholder="Enter Student ID"
            value={studentid || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "130px" }}>
            <label htmlFor="name">Name</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="text"
            name="name"
            id="name"
            placeholder="Enter Student Name"
            value={name || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "126px" }}>
            <label htmlFor="number">Phone</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="number"
            name="phone"
            id="number"
            placeholder="Enter Student Phone"
            value={phone || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "132px" }}>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Student Email"
              value={email || ""}
            />
          </div>
        </div>
        <div className="label">
          <div style={{ marginRight: "80px" }}>
            <label htmlFor="date_of_birth">Date of Birth</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="date_of_birth"
            name="date_of_birth"
            id="date_of_birth"
            placeholder="01/01/2000"
            value={date_of_birth || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "116px" }}>
            <label htmlFor="address">Address</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="text"
            name="address"
            id="address"
            placeholder="Enter Student Address"
            value={address || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "100px" }}>
            <label htmlFor="courseid">Course ID</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="number"
            name="courseid"
            id="courseid"
            placeholder="Enter Course ID"
            value={courseid || ""}
          />
        </div>

        <input
          style={{
            margin: "30px",
            // margin: "10px",
            padding: "8px",
            border: "3px solid #ccc",
            outline: "0",
            fontSize: "15px",
            verticalAlign: "baseline",
            backgroundColor: "#24a0ed",
            /* text bold */
            fontWeight: "bold",

            color: "rgb(0, 0, 0)",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
          }}
          type="submit"
          value={id ? "Update" : "Save"}
        />

        <Link to="/">
          <input
            style={{
              margin: "30px",
              // margin: "10px",
              padding: "8px",
              border: "3px solid #ccc",
              outline: "0",
              fontSize: "15px",
              verticalAlign: "baseline",
              backgroundColor: "#40aa91",
              /* text bold */
              fontWeight: "bold",

              color: "rgb(0, 0, 0)",
              borderRadius: "5px",
              textAlign: "center",
              cursor: "pointer",
            }}
            type="button"
            value="Go Back"
          />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
