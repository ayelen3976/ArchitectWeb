import React from "react";
import "./Gallery.scss";
import { Container, Row} from "react-bootstrap";


let data = [
  {
    id:1,
    image:
      "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
  

    },
  {
    id:2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52yAGeb9Ogu2TAcFFno_ou4HqjFGlTME1GS2r0ULRuciYP8FtpyHLSVOJ4dElgh-Zzb4&usqp=CAU",
  },
  {
    id:3,
    image:
      "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
  },
  {
    id:4,
    image:
      "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
  },
  {
    id:5,
    image:
      "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
  },
  {
    id:6,
    image:
      "https://us.123rf.com/450wm/tab1962/tab19621705/tab1962170500039/79246728-front-view-of-a-well-maintained-front-yard-of-home-during-a-nice-spring-day.jpg?ver=6",
  },
];
console.log(data);

function Gallery({setModal}) {
  return (
    <div className="gallery">
     
      <Container>
        <Row className="grid_gallery">
          {data.map((i) => (
            <div className='div_image' onClick={()=>setModal(i.image)}>
              <img src={i.image} alt="project" />
              
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Gallery;
