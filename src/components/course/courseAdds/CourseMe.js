// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import "./CourseMe.css";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useParams } from "react-router-dom";

// const CourseMe = () => {
//   return (
//     <div>
//       <AddUser />
//     </div>
//   );
// };

// const initialState = {
//   courseid: "",
//   departmentName: "",
//   coursetitle: "",
//   coursecode: "",
//   semester: "",
// };

// const AddUser = () => {
//   const [state, setState] = useState(initialState);
//   const { courseid, departmentName, coursetitle, coursecode, semester } = state;
//   const history = useNavigate();

//   const { id } = useParams();

//   useEffect(() => {
//     axios.get(`http://localhost:2000/course/get/${id}`).then((res) => {
//       setState({
//         ...res.data[0],
//         // name: res.data.name,
//         // email: res.data.email,
//         // contact: res.data.contact,
//       });
//     });
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       !courseid ||
//       !departmentName ||
//       !coursetitle ||
//       !coursecode ||
//       !semester
//     ) {
//       toast.error("Please fill all the fields");
//     } else {
//       if (id) {
//         axios
//           .put(`http://localhost:2000/course/update/${id}`, {
//             courseid,
//             departmentName,
//             coursetitle,
//             coursecode,
//             semester,
//           })
//           .then(() => {
//             setState({
//               courseid: "",
//               departmentName: "",
//               courseTitle: "",
//               courseCode: "",
//               semester: "",
//             });
//           })
//           .catch((err) => toast.error(err.response.data));

//         toast.success("Updated successfully");
//       } else {
//         axios
//           .post("http://localhost:2000/course/post", {
//             courseid,
//             departmentName,
//             coursetitle,
//             coursecode,
//             semester,
//           })
//           .then(() => {
//             setState({
//               courseid: "",
//               departmentName: "",
//               coursetitle: "",
//               coursecode: "",
//               semester: "",
//             });
//           })
//           .catch((err) => toast.error(err.response.data));
//         toast.success("added successfully ");
//       }

//       setTimeout(() => history("/course"), 500);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   return (
//     <div style={{ marginTop: "100px" }}>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="courseid">Course Id</label>
//         <input
//           onChange={handleInputChange}
//           type=""
//           name="courseid"
//           id="courseid"
//           placeholder="Enter Course Title"
//           value={courseid || ""}
//         />
//         <label htmlFor="departmentName">Department Name</label>
//         <input
//           onChange={handleInputChange}
//           type="text"
//           name="departmentName"
//           id="departmentName"
//           placeholder="Enter Department Name"
//           value={departmentName || ""}
//         />
//         <label htmlFor="coursetitle">Course Title</label>
//         <input
//           onChange={handleInputChange}
//           type="text"
//           name="coursetitle"
//           id="coursetitle"
//           placeholder="Enter Course Title"
//           value={coursetitle || ""}
//         />
//         <label htmlFor="coursecode">Course Code</label>
//         <input
//           onChange={handleInputChange}
//           type=""
//           name="coursecode"
//           id="coursecode"
//           placeholder="Enter Course Code"
//           value={coursecode || ""}
//         />
//         <label htmlFor="semester">Semester</label>
//         <input
//           onChange={handleInputChange}
//           type="text"
//           name="semester"
//           id="semester"
//           placeholder="Enter Semester"
//           value={semester || ""}
//         />

//         <input type="submit" value={id ? "Update" : "Save"} />

//         <Link to="/course">
//           <input type="button" value="Go Back" />
//         </Link>
//       </form>
//       <h1>ok</h1>
//     </div>
//   );
// };

// export default CourseMe;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./CourseMe.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CourseMe = () => {
  return (
    <div>
      <AddUser />
    </div>
  );
};

const initialState = {
  courseid: "",
  departmentName: "",
  coursetitle: "",
  coursecode: "",
  semester: "",
};

const AddUser = () => {
  const [state, setState] = useState(initialState);
  const { courseid, departmentName, coursetitle, coursecode, semester } = state;
  const history = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/course/get/${id}`).then((res) => {
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
      !courseid ||
      !departmentName ||
      !coursetitle ||
      !coursecode ||
      !semester
    ) {
      toast.error("Please fill all the fields");
    } else {
      if (id) {
        axios
          .put(`http://localhost:2000/course/update/${id}`, {
            courseid,
            departmentName,
            coursetitle,
            coursecode,
            semester,
          })
          .then(() => {
            setState({
              courseid: "",
              departmentName: "",
              courseTitle: "",
              courseCode: "",
              semester: "",
            });
          })
          .catch((err) => toast.error(err.response.data));

        toast.success("Updated successfully");
      } else {
        axios
          .post("http://localhost:2000/course/post", {
            courseid,
            departmentName,
            coursetitle,
            coursecode,
            semester,
          })
          .then(() => {
            setState({
              courseid: "",
              departmentName: "",
              coursetitle: "",
              coursecode: "",
              semester: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("added successfully ");
      }

      setTimeout(() => history("/course"), 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="CourseInput" style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <div style={{ marginRight: "103px", fontWeight: "bold" }}>
            <label htmlFor="courseid">Course Id</label>
          </div>
          <div style={{ padding: "5px" }}>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="Number"
              name="courseid"
              id="courseid"
              placeholder="Enter Course Title"
              value={courseid || ""}
            />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "36px", fontWeight: "bold" }}>
            <label htmlFor="departmentName">Department Name</label>
          </div>
          <div style={{ padding: "5px" }}>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type=""
              name="departmentName"
              id="departmentName"
              placeholder="Enter Course Title"
              value={departmentName || ""}
            />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "83px", fontWeight: "bold" }}>
            <label htmlFor="coursetitle">Course Title</label>
          </div>
          <div style={{ padding: "5px" }}>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="text"
              name="coursetitle"
              id="coursetitle"
              placeholder="Enter Course Title"
              value={coursetitle || ""}
            />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "81px", fontWeight: "bold" }}>
            <label htmlFor="coursecode">Course Code</label>
          </div>
          <div style={{ padding: "5px" }}>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="text"
              name="coursecode"
              id="coursecode"
              placeholder="Enter Course Code"
              value={coursecode || ""}
            />
          </div>
        </div>
        <div>
          <div style={{ marginRight: "100px", fontWeight: "bold" }}>
            <label htmlFor="semester">Semester</label>
          </div>
          <div style={{ padding: "5px" }}>
            <input
              style={{ padding: "3px" }}
              onChange={handleInputChange}
              type="text"
              name="semester"
              id="semester"
              placeholder="Enter Semester"
              value={semester || ""}
            />
          </div>
        </div>

        <input
          className="btn-form-control"
          type="submit"
          value={id ? "Update" : "Save"}
        />

        <Link to="/course">
          <input
            className="btn-course "
            style={{ margin: "10px" }}
            type="button"
            value="Go Back"
          />
        </Link>
      </form>
    </div>
  );
};

export default CourseMe;
