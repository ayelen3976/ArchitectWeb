import React from "react";
import "./CardReview.scss";
import Slider from "react-slick";
function CardReview(props) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {props.listclients.map((data) => (
          <div className="cardR_content">
            <img src={data.img} alt="img" />
            <div className="txt_body">
              <p> " {data.description} "</p>
              <div className="txt_last">
                <p>
                  {data.name} <br></br>
                  {data.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
export default CardReview;
