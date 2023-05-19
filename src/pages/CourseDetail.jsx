import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courseList } from "../courseList";

function CourseDetail() {
  const param = useParams();
  console.log(param);
  const [courseDetail, setCourseDetail] = useState({});

  useEffect(() => {
    const findedValue = courseList.find((item) => item.id == param.id);
    setCourseDetail(findedValue);
  }, []);

  return (
    <div className="container">
      <h2>Course Detail : {param.id}</h2>
      <h1> Course Name: {courseDetail.name} </h1>
      <p> Description: {courseDetail.desp} </p>
      <h4> Price {courseDetail.price} </h4>
    </div>
  );
}

export default CourseDetail;
