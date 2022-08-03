import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Department = () => {
  return (
    <div>
      <AddUser />
    </div>
  );
};

const initialState = {
  departmentId: "",
  departmentName: "",
  departmentPhone: "",
  departmentEmail: "",
};

const AddUser = () => {
  const [state, setState] = useState(initialState);
  const { departmentId, departmentName, departmentPhone, departmentEmail } =
    state;
  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/department/get/${id}`).then((res) => {
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
      !departmentId ||
      !departmentName ||
      !departmentPhone ||
      !departmentEmail
    ) {
      toast.error("Please fill all the fields");
    } else {
      if (id) {
        axios
          .put(`http://localhost:2000/department/update/${id}`, {
            departmentId,
            departmentName,
            departmentPhone,
            departmentEmail,
          })
          .then(() => {
            setState({
              studentid: "",
              name: "",
              phone: "",
              email: "",
              date_of_birth: "",
              address: "",
            });
          })
          .catch((err) => toast.error(err.response.data));

        toast.success("Updated successfully");
      } else {
        axios
          .post("http://localhost:2000/department/post", {
            departmentId,
            departmentName,
            departmentPhone,
            departmentEmail,
          })
          .then(() => {
            setState({
              departmentId: "",
              departmentName: "",
              departmentPhone: "",
              departmentEmail: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("added successfully ");
      }

      setTimeout(() => history("/department"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="inputfield" style={{ marginTop: "100px" }}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="label">
          <div style={{ marginRight: "66px" }}>
            <label htmlFor="departmentId">Department ID</label>
          </div>

          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type=""
            name="departmentId"
            id="departmentId"
            placeholder="Enter Department ID"
            value={departmentId || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "41px" }}>
            <label htmlFor="name">Department Name</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="text"
            name="departmentName"
            id="departmentName"
            placeholder="Enter Department Name"
            value={departmentName || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "40px" }}>
            <label htmlFor="number">Department Phone</label>
          </div>
          <input
            style={{ padding: "3px" }}
            onChange={handleInputChange}
            type="number"
            name="departmentPhone"
            id="departmentPhone"
            placeholder="Enter Department Phone"
            value={departmentPhone || ""}
          />
        </div>
        <div className="label">
          <div style={{ marginRight: "43px" }}>
            <label htmlFor="email">Department Email</label>
          </div>
          <div>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="email"
              name="departmentEmail"
              id="departmentEmail"
              placeholder="Enter Department Email"
              value={departmentEmail || ""}
            />
          </div>
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
            backGround: "#7affc5",
            /* text bold */
            fontWeight: "bold",

            color: "rgb(0, 0, 0)",
            borderRadius: "5px",
            textAlign: "center",
          }}
          type="submit"
          value={id ? "Update" : "Save"}
        />

        <Link to="/department">
          <input
            style={{
              margin: "30px",
              // margin: "10px",
              padding: "8px",
              border: "3px solid #ccc",
              outline: "0",
              fontSize: "15px",
              verticalAlign: "baseline",
              backGround: "#7affc5",
              /* text bold */
              fontWeight: "bold",

              color: "rgb(0, 0, 0)",
              borderRadius: "5px",
              textAlign: "center",
            }}
            type="button"
            value="Go Back"
          />
        </Link>
      </form>
    </div>
  );
};

export default Department;
