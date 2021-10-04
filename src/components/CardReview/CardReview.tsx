import React from "react";
import "./CardReview.scss";
function CardReview(props) {
  return (
    <>
      {props.listclients.map((data) => (
        <div className="cardR_content">
          <img src={data.img} alt='img'/>
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
    </>
  );
}
export default CardReview;
