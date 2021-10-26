import React from "react";
import { Row, Col } from "react-bootstrap";
import profile from './../../assests/profile.png'
import icon1 from './../../assests/architecture.png'
import icon2 from './../../assests/bricks.png'
import icon3 from './../../assests/arqdesign.png'
import {Link} from 'react-router-dom'
import "./AboutMe.scss";
function AboutMe() {
  return (
    <div className="about_me" id='about'>
      <Row className="row_about">
        <Col>
          <div className="about_col_left">
            <img src={profile} alt='profile'/>
          </div>
        </Col>
        <Col>
          <div className="about_col_right">
            <p className='txt_1'>BUILDING COMPANY</p>
            <p className='txt_2'>ARCHITECT</p>
            <p className='short_description'>Welcome to my Company, I studied at the university Buenos Aires from Argentina. I love design and build amazing things to do your life more confortable </p>
            <div className='options'>
            <p > <img src={icon3} alt='icon1'/><span> Arquitectura & Diseño de interiores   </span></p>
            <p > <img src={icon2} alt='icon2'/> <span> Ejecución de Obra</span></p>
            <p> <img src={icon1} alt='icon3'/><span>Asesoría y Decoración </span></p>

            </div>
           <Link to='/profile'>
            <button>SHOW MORE</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default AboutMe;
