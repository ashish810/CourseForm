import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleTitleChange(event) {
    const updatedCourse = {
      ...course,
      title: event.target.value
    };
    setCourse(updatedCourse);
  }
  function handleCategoryChange(event) {
    const updatedCourse = {
      ...course,
      category: event.target.value
    };
    setCourse(updatedCourse);
  }
  return (
    <>
      <h2> Manage Course Form </h2>
      <CourseForm
        course={course}
        onTitleChange={handleTitleChange}
        onCategoryChange={handleCategoryChange}
      />
    </>
  );
};

export default ManageCoursePage;
