import React from "react";
import "./BannerAse.scss";
function BannerAse() {
  return (
    <div className="banner">
      <img
        src={
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2231&q=80"
        }
        alt="img"
      />
      <div className="box">
        <p>
          We design people inspired<br></br>
          Experiences that create positive<br></br>
          change in people’s lives.{" "}
        </p>
      </div>
    </div>
  );
}
export default BannerAse;
