import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { courseList } from "../courseList";
import { BiArrowBack } from "react-icons/bi";

function CourseDetail() {
  const param = useParams();
  const navigate = useNavigate();
  // BY OLD WAY =================================
  // const [courseDetail, setCourseDetail] = useState({});

  // useEffect(() => {
  //   const findedValue = courseList.find((item) => item.id == param.id);
  //   setCourseDetail(findedValue);
  // }, []);

  // USING LOCATION ====================================
  const location = useLocation();
  console.log("location", location.state);

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="btn btn-primary mb-5">
        <BiArrowBack />
      </button>
      {/* BY LOCATION */}
      <h4>Course Name: {location.state.name}</h4>
      <p> {location.state.desp} </p>
      <p> &#8377;{location.state.price} </p>

      <button className="btn btn-danger btn-sm">Add To Cart</button>

      {/*  OLD WAY */}
      {/* <h2>Course Detail : {param.id}</h2>
      <h1> Course Name: {courseDetail.name} </h1>
      <p> Description: {courseDetail.desp} </p>
      <h4> Price {courseDetail.price} </h4> */}
    </div>
  );
}

export default CourseDetail;
