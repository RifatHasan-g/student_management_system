import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/navbar/Nav";
import AddEdit from "./components/added/AddEdit";
import View from "./components/View/View";
import Course from "./components/course/courses/Course";
import CourseMe from "./components/course/courseAdds/CourseMe";
import ViewM from "./components/course/viewCon/ViewM";
import Inner from "./components/query/Inner";
import DepartmentH from "./components/department/departmentHome/DepartmentH";
import Department from "./components/department/departmentAdd/Department";
import DepartmentV from "./components/department/departmentView/DepartmentV";
function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/department" element={<DepartmentH />} />
        <Route path="/addDepartment/:id" element={<Department />} />
        <Route path="/addDepartment" element={<Department />} />
        <Route path="/updateM/:id" element={<CourseMe />} />
        <Route path="/update/:id" element={<AddEdit />} />
        {/* <Route path="/updateM/:id" element={<AddEdit />} /> */}
        <Route path="/view/:id" element={<View />} />
        <Route path="/viewM/:id" element={<ViewM />} />
        <Route path="/DepartmentV/:id" element={<DepartmentV />} />

        <Route path="/addContact" element={<AddEdit />} />
        <Route path="/department" element={<AddEdit />} />
        <Route path="/CourseMe" element={<CourseMe />} />

        <Route path="/inner" element={<Inner />} />
      </Routes>
    </div>
  );
}

export default App;
