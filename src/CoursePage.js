import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { getCourses } from "./api/courseApi";

class CoursePage extends React.Component {
  state = {
    courses: []
  };

  render() {
    return (
      <>
        <h2>Courses</h2>
        <a href="/course">
          <h3> Add Course</h3>
        </a>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th> Author Id</th>
              <th> Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map(course => {
              return (
                <tr key={course.id}>
                  <td> {course.title}</td>
                  <td>{course.authorId}</td>
                  <td> {course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;
