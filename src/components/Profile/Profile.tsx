import React from "react";
import "./Profile.scss";
import { Row, Col, Container } from "react-bootstrap";

let cv = [
  {
    id: 1,
    name: "contruccion edicion smart",
    year: "2015-2019",
    description:
      "Mi nombre es abigail ailen helena fernandez y me gusta diseñar y contruir casas, soy amante del gimansio y me gusta disfrutar la vidaMi nombre es abigail ailen helena fernandez y me gusta diseñar y contruir casas, soy amante del gimansio y me gusta disfrutar la vida",
  },
  {
    id: 2,
    name: "contruccion edicion smart",
    year: "2015-2019",
    description:
      "Mi nombre es abigail ailen helena fernandez y me gusta diseñar y contruir casas, soy amante del gimansio y me gusta disfrutar la vidaMi nombre es abigail ailen helena fernandez y me gusta diseñar y contruir casas, soy amante del gimansio y me gusta disfrutar la vida",
  },
];
let education = [
  {
    id: 1,
    name: "LIceo Militar Gnral San Martin 2010-2014",

    description:
      "educacion de internacion, preparacion estricta para ser amante del pais, y serle fiel a nuestra nacion",
  },
  {
    id: 2,
    name: "LIceo Militar Gnral San Martin 2010-2014",

    description:
      "educacion de internacion, preparacion estricta para ser amante del pais, y serle fiel a nuestra nacion",
  },
];
let awards = [
  {
    id: 1,
    name: "GRAPHIC DESIGNER ",

    description:
      "educacion de internacion, preparacion estricta para ser amante del pais, y serle fiel a nuestra nacion",
  },
];
function Profile() {
  return (
    <div className="profile">
      <div className="title-profile">
        <p className="title1">ABIGAIL FERNANDEZ</p>
        <p className="title2">ARCHITECT</p>
      </div>

      <div>
        <div className="line-div"></div>
        <Container>
          <Row>
            <Col>
              <div className="text-left">
                <h2>
                  <span>EDUCATION</span>
                </h2>
                {education.map((i) => (
                  <div className="body-text-left">
                    <p className="body-text-left-p">{i.name}</p>
                    <p className="body-text-left-des">{i.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-left">
                <h2>
                  <span>AWARDS</span>
                </h2>
                {awards.map((i) => (
                  <div  className="body-text-left">
                    <p className="body-text-left-p">{i.name}</p>
                    <p className="body-text-left-des"> {i.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-left">
                <h2>
                  <span>CONTACT</span>
                </h2>

                <div className="body-text-left">
                  <p>. +5411245367</p>
                  <p>. abigail@gmail.com</p>
                </div>
              </div>
            </Col>
            <Col className="col-right">
              <div className='profile-right'>
                <p className='p-profile'>PROFILE</p>
                <p className='p-description'>
                  Mi nombre es abigail ailen helena fernandez y me gusta diseñar
                  y contruir casas, soy amante del gimansio y me gusta disfrutar
                  la vidaMi nombre es abigail ailen helena fernandez y me gusta
                  diseñar y contruir casas, soy amante del gimansio y me gusta
                  disfrutar la vida
                </p>
              </div>
              <div className="div-experience">
                <p className="title">EXPERIENCE</p>

                {cv.map((i) => (
                  <div className="body-experience">
                    <p className="p-name">{i.name}</p>
                    <p className="p-year">{i.year}</p>
                    <p className="p-descrip">{i.description}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='btn-download'>
        <button>DOWNLOAD</button>
      </div>
    </div>
  );
}
export default Profile;
