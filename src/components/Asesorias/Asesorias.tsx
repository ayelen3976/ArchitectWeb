import React from "react";
import BannerAse from "./../BannerAse/BannerAse";
import SquareAse from "./../SquareAse/SquareAse";
import "./Asesorias.scss";
import { Row, Col } from "react-bootstrap";
import icon1 from "./../../assests/design.png";
import icon2 from "./../../assests/table.png";
import icon3 from "./../../assests/light.png";
function Asesorias() {
  return (
    <div className="asesorias">
      <BannerAse />
      <div className="container-asesorias">
        <div className="div-phases">
          <div className="img-phase">
            <div className="div-boxes">
              <Row>
                <Col className="col-box">
                  <div>
                    {" "}
                    <img src={icon1} alt="xd" />
                    <p className="p1">INTERIOR</p>
                    <p>
                      simple diseño de interior basado en ideas y mucha
                      planeación .
                    </p>
                  </div>
                </Col>
                <Col className="col-box">
                  <div>
                    {" "}
                    <img src={icon2} alt="xd" />
                    <p className="p1">MUEBLES</p>
                    <p>
                      simple diseño de interior basado en ideas y mucha
                      planeación .
                    </p>
                  </div>
                </Col>
                <Col className="col-box">
                  <div>
                    {" "}
                    <img src={icon3} alt="xd" />
                    <p  className="p1">ILUMINACIÓN</p>
                    <p>
                      simple diseño de interior basado en ideas y mucha
                      planeación .
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <img
              className="img-phase-img"
              src={
                "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
              }
              alt="img"
            />
          </div>
        </div>
        {/* -----------------------------bow-text-under-image--------------------------------------------------- */}
        <div className="text-under-img">
          <p>
            nos cuentas tus comodidas , gustos, y ideas, para hacer tu espacio
            mas confortabe. ya que estar en un area comoda es importante para
            desarrollar cada actividad requeridas o variades .
          </p>
        </div>
      </div>
      <SquareAse />
    </div>
  );
}
export default Asesorias;
