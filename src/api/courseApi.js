import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_URL + "/courses/";
export function getCourses() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getCoursesBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then(response => {
      if (!response.ok) throw new Error("network response was not ok");
      return response.json().then(courses => {
        if (courses.length != 1) throw new Error("couse not found : " + slug);
        return courses[0];
      });
    })
    .catch(handleError);
}
