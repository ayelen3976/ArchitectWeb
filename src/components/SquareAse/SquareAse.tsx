import React from "react";
import "./SquareAse.scss";
import { Row, Col } from "react-bootstrap";
import CardSquare from "./../CardSquare/CardSquare";
function SquareAse() {
  return (
    <div className="square-ase">
      <Row>
        <Col className="div-img" xs={6}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1586798271654-0471bb1b0517?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
              alt="xd"
            />
          </div>
        </Col>

        <Col className="div-cards" xs={6}>
          <div className='div-only-card'>
            <CardSquare />
          </div >
          <div className='div-only-card'>
            <CardSquare />
          </div>
          <div className='div-only-card'>
            <CardSquare />
          </div>
        </Col>
      </Row>
      <Row>
     

        <Col className="div-cards" xs={6}>
          <div className='div-only-card'>
            <CardSquare />
          </div >
          <div className='div-only-card'>
            <CardSquare />
          </div>
          <div className='div-only-card'>
            <CardSquare />
          </div>
        </Col>
        <Col className="div-img" xs={6}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517414628894-83d47b22f233?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
              alt="xd"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default SquareAse;
