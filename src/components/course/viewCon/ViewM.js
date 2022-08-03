// import React from "react";
// import { useEffect, useState } from "react";
// import "./ViewMe.css";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// const View = () => {
//   const [user, setUser] = useState({});
//   const { courseid, departmentName, coursetitle, coursecode, semester } = user;

//   const { id } = useParams();
//   useEffect(() => {
//     axios.get(`http://localhost:2000/course/get/${id}`).then((res) => {
//       setUser({
//         ...res.data[0],
//         // name: res.data.name,
//         // email: res.data.email,
//         // contact: res.data.contact,
//       });
//     });
//   }, [id]);

//   return (
//     <div style={{ marginTop: "150px" }}>
//       <div className="card">
//         <div className="card-header">User Contact Detail</div>
//         <div className="container">
//           <strong>ID:</strong>
//           <span>{id}</span>
//           <br />
//           <br />
//           <strong>Course ID:</strong>
//           <span>{courseid}</span>
//           <br />
//           <br />
//           <strong>Course Title:</strong>
//           <span>{coursetitle}</span>
//           <br />
//           <br />
//           <strong>Course Code:</strong>
//           <span>{coursecode}</span>
//           <br />
//           <br />
//           <strong>Semester:</strong>
//           <span>{semester}</span>
//           <br />
//           <br />
//           <strong>Department:</strong>
//           <span>{departmentName}</span>
//           <br />
//           <br />
//           {/* <strong>Contact:</strong>
//           <span>{date_of_birth}</span>
//           <br />
//           <br />
//           <strong>Contact:</strong>
//           <span>{address}</span>
//           <br />
//           <br /> */}
//           <Link to="/course">
//             <div className="btn btn-edit">Go Back</div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default View;

import React from "react";
import { useEffect, useState } from "react";
import "./ViewMe.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({});
  const { courseid, departmentName, coursetitle, coursecode, semester } = user;

  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:2000/course/get/${id}`).then((res) => {
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
          <span>{courseid}</span>
          <br />
          <br />
          <strong>Student ID:</strong>
          <span>{departmentName}</span>
          <br />
          <br />
          <strong>Course Title:</strong>
          <span>{coursetitle}</span>
          <br />
          <br />
          <strong>Course Code:</strong>
          <span>{coursecode}</span>
          <br />
          <br />
          <strong>Semester:</strong>
          <span>{semester}</span>
          <br />
          <br />
          {/* <strong>Contact:</strong>
          <span>{date_of_birth}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{address}</span>
          <br />
          <br /> */}
          <Link to="/course">
            <div className="btn btn-edit">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
