import React from "react";
import { Link } from "react-router-dom";
import { AuthRoutes } from "../../../RouteHandler/routeEnum";
import { Row, Col, CarouselItem } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SocialTabs: React.FC = () => {
  return (
    <section className="social_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cursol_area_inner">
              <div className="cursol_area_inner_title">
                <div className="social_area_title">
                  <h3>
                    <img src="/images/icon_set/icon_6.png" alt="image" />
                    @instahandle{" "}
                    <Link
                      to={AuthRoutes.updateSocialmediaHandler}
                      className="nav_link4"
                    >
                      edit
                    </Link>
                  </h3>
                </div>
              </div>

              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
              >
                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />

                <img src="/images/food_item.png" alt="image" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialTabs;
