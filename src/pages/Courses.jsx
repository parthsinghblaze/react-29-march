import React, { useContext } from "react";
import { courseList } from "../courseList";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { AppDetails } from "../App";

function Courses() {
  const navigate = useNavigate();

  const { cart, setCart, courseListData, setCourseLisData } =
    useContext(AppDetails);

  function addToCart(item) {
    const data = courseListData.map((singleItem) => {
      if (singleItem.id === item.id) {
        return { ...singleItem, cart: true };
      } else {
        return singleItem;
      }
    });

    setCourseLisData(data);
    setCart([...cart, item]);
  }

  return (
    <Container>
      <h3>Courses</h3>
      <div className="row">
        {courseListData.map((item) => {
          const { name, id, cart } = item;
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
                  {cart ? null : (
                    <button
                      className="btn-sm mt-3 btn btn-danger ms-2"
                      onClick={() => addToCart(item)}
                    >
                      Add To cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Courses;
