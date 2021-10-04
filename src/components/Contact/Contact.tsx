import React from "react";
import { Row, Col } from "react-bootstrap";

import "./Contact.scss";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
function ContactDetail() {
  return (
    <div className="contact-detail">
      <div className="contact-container">
        <div className="first-div">
          <Row className="first-div-row">
            <Col >
              <div>
                <AiOutlineWhatsApp className="icon-c"/>
                <p> Whatsapp</p>
              </div>
            </Col>
            <Col >
              <div>
                <AiOutlineInstagram className="icon-c"/>
                <p>Instagram</p>{" "}
              </div>
            </Col>
          </Row>
          <Row className="second-div-row">
            <Col >
              <div>
                {" "}
                <AiOutlineMail className="icon-c"/>
                <p>email</p>{" "}
              </div>
            </Col>
            <Col>
              <div>
                {" "}
                <AiFillLinkedin className="icon-c"/>
                <p>Linkedin</p>{" "}
              </div>
            </Col>
          </Row>
        </div>

        <div className="second-div">
          <div className="square">
            <div className="square-input">
              <p>CONTACT US</p>
              <input placeholder="Enter your name" />
              <input placeholder="Enter a valid email address"/>
              <textarea />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
export default ContactDetail;
