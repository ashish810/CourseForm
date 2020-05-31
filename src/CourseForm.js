import React from "react";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="title"> Title </label>
        <div className="field">
          <input
            id="title"
            type="text"
            onChange={props.onChange}
            name="title"
            className="form-control"
            value={props.course.title}
            error={props.errors.title}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="author">Author </label>
        <div className="field">
          <select
            id="authorId"
            name="author"
            onChange={props.onChange}
            value={props.course.authorId}
            className="form-control"
          >
            <option value="" />
            <option value="1">Ashish</option>
            <option value="2">Aryan</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            id="category"
            type="text"
            onChange={props.onChange}
            name="category"
            className="form-control"
            value={props.course.category}
            error={props.errors.category}
          />
        </div>
      </div>
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
