import React, { useState } from "react";
// import NavHome from "../Navbar/Navbar";
import AboutMe from "./../AboutMe/AboutMe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Gallery from "./../Gallery/Gallery";
import Modalimg from "./../Modalimg/Modalimg";
import Clients from "./../Clients/Clients";
import ContactDetail from "./../Contact/Contact";
import Footer from './../Footer/Footer';
import "./Home.scss";
function Home() {
  const [modal, setModal] = useState(null);
  var settings = {
    dots: true,
    infinite: true,

    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="Home">
      {/* <NavHome /> */}
      <Slider {...settings} className="slider-carrousel">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpR9JJG4BzX16tAmhzAyDW6khSsDFy8JgGKECkaC823-CQnICp7lbuqk95alyjq8U1Dc&usqp=CAU"
            alt="img1"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/4d/16/9d/4d169daad5975a9224ae284226e2a9d6.jpg"
            alt="img2"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/a3/61/30/a3613045948ac98ebd333e08fa8d361b.jpg"
            alt="img3"
          />
        </div>
      </Slider>

      <AboutMe />
      <div className="home_gallery">
        <p>PROYECTOS REALIZADOS</p>
      </div>

      <Gallery setModal={setModal} />
      {modal && <Modalimg setModal={setModal} modal={modal} />}

      <Clients />
      <ContactDetail/>
      <Footer/>
    </div>
  );
}
export default Home;
