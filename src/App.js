import React, { Component } from "react";
import "./styles.css";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursePage from "./CoursePage";
import ManageCoursePage from "./ManageCoursePage";
//import CourseForm from "./CourseForm";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/courses") return <CoursePage />;
    if (route === "/course/:slug") return <ManageCoursePage />;
    if (route === "/course") return <ManageCoursePage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}
export default App;
