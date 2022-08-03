const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "labprojectd",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// make api get show all data with mysql
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM student";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM student WHERE id = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { studentid, courseid, name, phone, email, date_of_birth, address } =
    req.body;
  const sqlUpdate =
    "UPDATE student SET studentid=?,courseid=?, name = ?, phone= ?, email = ?,date_of_birth=?,address=?  WHERE id = ?";
  db.query(
    sqlUpdate,
    [studentid, courseid, name, phone, email, date_of_birth, address, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// app.post("/api/post", (req, res) => {
//   const { id, name, email, contact } = req.body;
//   const sqlInsert = "INSERT INTO db_con(id,name,email,contact)VALUES(?,?,?,?)";
//   db.query(sqlInsert, [id, name, email, contact], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   });
// });

//how to make api post in mysql2
app.post("/api/post", (req, res) => {
  const { studentid, courseid, name, phone, email, date_of_birth, address } =
    req.body;
  const sqlInsert =
    "INSERT INTO `student`( `studentid`,`courseid`,`name`, `phone`, `email`,`date_of_birth`,`address`) VALUES (?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [studentid, courseid, name, phone, email, date_of_birth, address],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM `student` WHERE `id`=?";
  db.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// app.get("/", (req, res) => {
//   // const sqlInsert =
//   //   // "INSERT INTO db_con(name,email,contact)VALUSE('Rifat','rifat@gmail.com','01787878787')";
//   //   "INSERT INTO db_con(id,name,email,contact)VALUES(1,'Rifat','rifat@gmail.com','1234')";
//   // db.query(sqlInsert, (err, result) => {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(result);
//   //   }
//   //   res.send("Hello World");
//   // });
// });

// take_course................................................................

app.get("/course/get", (req, res) => {
  const sqlGet = "SELECT * FROM takes_course";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/course/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM takes_course WHERE id = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/course/update/:id", (req, res) => {
  const { id } = req.params;
  const { courseid, departmentName, coursetitle, coursecode, semester } =
    req.body;
  const sqlUpdate =
    "UPDATE takes_course SET courseid=?,departmentName=?, coursetitle = ?, coursecode= ?, semester=?  WHERE id = ?";
  db.query(
    sqlUpdate,
    [courseid, departmentName, coursetitle, coursecode, semester, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

//how to make api post in mysql2
app.post("/course/post", (req, res) => {
  const { courseid, departmentName, coursetitle, coursecode, semester } =
    req.body;
  const sqlInsert =
    "INSERT INTO `takes_course`(`courseid`,`departmentName`, `coursetitle`, `coursecode`, `semester`) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [courseid, departmentName, coursetitle, coursecode, semester],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete("/course/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM `takes_course` WHERE `id`=?";
  db.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// End take course........................................................

// take_course................................................................

// app.get("/course/get", (req, res) => {
//   const sqlGet = "SELECT * FROM takes_course";
//   db.query(sqlGet, (err, result) => {
//     res.send(result);
//   });
// });

// app.get("/course/get/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlGet = "SELECT * FROM takes_course WHERE id = ?";
//   db.query(sqlGet, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// app.put("/course/update/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(err);
//   const { courseid, departmentName, coursetitle, coursecode, semester } =
//     req.body;
//   const sqlUpdate =
//     // "UPDATE takes_course SET courseid=?, coursetitle = ?, coursecode= ?, semester=? ,departmentName =? WHERE id = ?";
//     "UPDATE `takes_course` SET `courseid`=?,`departmentName`=?,`coursetitle`=?,`coursecode`=?,`semester`=? WHERE id=?";
//   db.query(
//     sqlUpdate,
//     [courseid, departmentName, coursetitle, coursecode, semester, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// //how to make api post in mysql2
// app.post("/course/post", (req, res) => {
//   const { courseid, departmentName, coursetitle, coursecode, semester } =
//     req.body;
//   const sqlInsert =
//     "INSERT INTO `takes_course`(`courseid`,`departmentName`, `coursetitle`, `coursecode`,`semester` ) VALUES (?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [courseid, departmentName, coursetitle, coursecode, semester],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// });

// app.delete("/course/remove/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlRemove = "DELETE FROM `takes_course` WHERE `id`=?";
//   db.query(sqlRemove, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// End take course........................................................
// Department................................................................

app.get("/department/get", (req, res) => {
  const sqlGet = "SELECT * FROM department";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/department/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM department WHERE id = ?";
  db.query(sqlGet, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.put("/department/update/:id", (req, res) => {
  const { id } = req.params;
  const { departmentId, departmentName, departmentPhone, departmentEmail } =
    req.body;
  const sqlUpdate =
    "UPDATE `department` SET `departmentId`=?,`departmentName`=?,`departmentPhone`=?,`departmentEmail`=? WHERE id=?";
  db.query(
    sqlUpdate,
    [departmentId, departmentName, departmentPhone, departmentEmail, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

//how to make api post in mysql2
app.post("/department/post", (req, res) => {
  const { departmentId, departmentName, departmentPhone, departmentEmail } =
    req.body;
  const sqlInsert =
    "INSERT INTO `department`(`departmentId`, `departmentName`, `departmentPhone`, `departmentEmail`) VALUES (?,?,?,?)";
  db.query(
    sqlInsert,
    [departmentId, departmentName, departmentPhone, departmentEmail],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.delete("/department/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM `department` WHERE `id`=?";
  db.query(sqlRemove, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// End take course........................................................

//Inner join...............................................................

app.get("/innerjoin/get", (req, res) => {
  const sqlGet =
    "SELECT * FROM ((student INNER JOIN takes_course ON student.courseid= takes_course.courseid)INNER JOIN department ON takes_course.departmentName=department.departmentName)";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
// join...............................................................

app.get("/join/get", (req, res) => {
  const sqlGet = `SELECT student.name,student.studentid,department.departmentName,takes_course.coursetitle FROM student JOIN takes_course ON student.courseid=takes_course.courseid JOIN department ON
    department.departmentName=takes_course.departmentName`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
//left join...............................................................
//student.studentid,student.name,takes_course.coursetitle,takes_course.coursecode,department.departmentName,department.departmentEmail,department.departmentPhone
app.get("/leftjoin/get", (req, res) => {
  const sqlGet = `SELECT * FROM takes_course  LEFT JOIN student ON student.courseid=takes_course.courseid LEFT JOIN department ON department.departmentName=takes_course.departmentName`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
//Right join...............................................................

app.get("/rightjoin/get", (req, res) => {
  const sqlGet = `SELECT student.studentid,student.name,takes_course.coursetitle,takes_course.coursecode,department.departmentName,department.departmentEmail,department.departmentPhone FROM takes_course  RIGHT JOIN student ON student.courseid=takes_course.courseid RIGHT JOIN department ON department.departmentName=takes_course.departmentName`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
//self join...............................................................

app.get("/selfjoin/get", (req, res) => {
  const sqlGet = `SELECT student.name , department.departmentName, takes_course.coursetitle FROM student, department,takes_course WHERE student.courseid <> takes_course.courseid AND takes_course.departmentName = department.departmentName ORDER BY takes_course.departmentName;`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
//cross join...............................................................

app.get("/crossjoin/get", (req, res) => {
  const sqlGet = `SELECT student.studentid,takes_course.coursetitle,takes_course.coursecode,department.departmentName,department.departmentEmail,department.departmentPhone FROM student CROSS JOIN takes_course ON student.courseid=takes_course.courseid CROSS JOIN department ON department.departmentName=takes_course.departmentName;`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});
//count join...............................................................

app.get("/countjoin/get", (req, res) => {
  const sqlGet = `SELECT semester , COUNT(semester) AS countSemester FROM takes_course GROUP BY semester;`;
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// app.get("/innerjoin/get/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlGet = "SELECT * FROM takes_course WHERE id = ?";
//   db.query(sqlGet, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

// app.put("/course/update/:id", (req, res) => {
//   const { id } = req.params;
//   const { courseTitle, courseCode, semester } = req.body;
//   const sqlUpdate =
//     "UPDATE takes_course SET courseTitle = ?, courseCode= ?, semester=?  WHERE id = ?";
//   db.query(
//     sqlUpdate,
//     [courseTitle, courseCode, semester, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       res.send(result);
//     }
//   );
// });

// //how to make api post in mysql2
// app.post("/course/post", (req, res) => {
//   const { courseTitle, courseCode, semester } = req.body;
//   const sqlInsert =
//     "";
//   db.query(sqlInsert, [courseTitle, courseCode, semester], (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// app.delete("/course/remove/:id", (req, res) => {
//   const { id } = req.params;
//   const sqlRemove = "DELETE FROM `takes_course` WHERE `id`=?";
//   db.query(sqlRemove, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

//SELECT * FROM student INNER JOIN takes_course ON student.id= takes_course.id;

//Inner join End...............................................................

app.listen(2000, () => {
  console.log("Server is running on port 2000");
});
