// import React from "react";
// import { useState, useEffect } from "react";
// import "./Course.css";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
// // import Department from "./../../department/departmentAdd/Department";

// const Course = () => {
//   return (
//     <div className="bg-color">
//       <Load />
//     </div>
//   );
// };
// const Load = () => {
//   const [data, setData] = useState([]);

//   const loading = async () => {
//     const res = await axios.get("http://localhost:2000/course/get");
//     setData(res.data);
//   };

//   useEffect(() => {
//     loading();
//   }, []);

//   const deleteContact = (id) => {
//     if (window.confirm("Are you sure you want to delete this item?")) {
//       axios.delete(`http://localhost:2000/course/remove/${id}`);
//       toast.success("Deleted successfully");
//       setTimeout(() => loading(), 100);
//     }
//   };

//   return (
//     <div style={{ marginTop: "150px" }}>
//       <Link to="/CourseMe">
//         <button className="btn btn-course">Add Course</button>
//       </Link>

//       <table className="style-table">
//         <thead>
//           <tr>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Course ID
//             </th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Department Name
//             </th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Course Title
//             </th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Course COde
//             </th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Semester
//             </th>

//             {/* <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Date of birth
//             </th>
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>
//               Location
//             </th> */}
//             <th style={{ textAlign: "center", paddingLeft: "15px" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => {
//             return (
//               <>
//                 <tr key={item.id} className="t-body">
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.courseid}</td>
//                   <td>{item.departmentName}</td>
//                   <td>{item.coursetitle}</td>
//                   <td>{item.coursecode}</td>
//                   <td>{item.semester}</td>

//                   <td>
//                     <Link to={`/updateM/${item.id}`}>
//                       <button className="btn btn-edit">Edit</button>
//                     </Link>
//                     <button
//                       className="btn btn-delete"
//                       onClick={() => deleteContact(item.id)}
//                     >
//                       Delete
//                     </button>
//                     <Link to={`/viewM/${item.id}`}>
//                       <button className="btn btn-view">View</button>
//                     </Link>
//                   </td>
//                 </tr>
//               </>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Course;

import React from "react";
import { useState, useEffect } from "react";
import "./Course.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Course = () => {
  return (
    <div className="bg-color home">
      <Load />
    </div>
  );
};
const Load = () => {
  const [data, setData] = useState([]);

  const loading = async () => {
    const res = await axios.get("http://localhost:2000/course/get");
    setData(res.data);
  };

  useEffect(() => {
    loading();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios.delete(`http://localhost:2000/course/remove/${id}`);
      toast.success("Deleted successfully");
      setTimeout(() => loading(), 100);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <Link to="/CourseMe">
        <button className=" btn btn-student">Add CourseInfo</button>
      </Link>

      <table className="style-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>ID</th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Course ID
            </th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Department Name
            </th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Course Title
            </th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Course COde
            </th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Semester
            </th>
            {/* <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Date of birth
            </th>
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>
              Location
            </th> */}
            <th style={{ textAlign: "center", paddingLeft: "15px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={item.id} className="t-body">
                  <th scope="row">{index + 1}</th>
                  <td>{item.courseid}</td>
                  <td>{item.departmentName}</td>
                  <td>{item.coursetitle}</td>
                  <td>{item.coursecode}</td>
                  <td>{item.semester}</td>

                  <td>
                    <Link to={`/updateM/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => deleteContact(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/viewM/${item.id}`}>
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
  );
};

export default Course;
