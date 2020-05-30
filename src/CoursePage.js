import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { getCourses } from "./api/courseApi";

class CoursePage extends React.Component {
  state = {
    courses: []
  };

  componentDidMount() {
    getCourses().then(courses => this.setState({ Courses: courses }));
  }
  renderRow(course) {
    return (
      <tr>
        <td> {course.Title}</td>
        <td> {course.authorId}</td>
        <td> {course.category}</td>
      </tr>
    );
  }
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
          <tbody />
          <tbody>{this.state.courses.map(this.renderRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursePage;
