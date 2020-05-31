import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "./api/courseApi";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    const updatedCourse = {
      ...course,
      [target.name]: target.value
    };
    setCourse(updatedCourse);
  }
  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
  function hansleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course);
  }
  return (
    <>
      <h2> Manage Course Form </h2>
      <CourseForm
        course={course}
        errors={errors}
        onChange={handleChange}
        onSubmit={hansleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
