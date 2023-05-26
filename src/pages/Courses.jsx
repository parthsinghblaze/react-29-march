import React from "react";
import { courseList } from "../courseList";
import { Link, useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h3>Courses</h3>
      <div className="row">
        {courseList.map((item) => {
          const { name, id } = item;
          return (
            <div className="col-md-4  mb-4" key={id}>
              <div className="card shadow">
                <div className="card-body">
                  <h6 className="mb-0">
                    {name} {id}
                  </h6>
                  {/* <Link to={`/course/${id}`} className="mt-2 d-block">
                    View Course
                  </Link> */}
                  <button
                    className="btn-sm mt-3 btn btn-primary"
                    onClick={() => navigate(`/course/${id}`, { state: item })}
                  >
                    View Course
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
