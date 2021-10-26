import React from "react";
import CardReview from "../CardReview/CardReview";
import "./Clients.scss";

let listclients = [
  {
    id: 1,
    name: "John",
    description:
      "persona que no cambia de opinión o actitud aunque se le den razones convincentes en su contra Es muy testarudo y no habrá nada que lo haga cambiar de parecer.",
    position: "architect",
    img: "https://www.mdzol.com/u/fotografias/m/2021/6/21/f608x342-1072405_1102128_15.jpg",
  },
  {
    id: 2,
    name: "John",
    description:
      "persona que no cambia de opinión o actitud aunque se le den razones convincentes en su contra Es muy testarudo y no habrá nada que lo haga cambiar de parecer.",
    position: "architect",
    img: "https://www.mdzol.com/u/fotografias/m/2021/6/21/f608x342-1072405_1102128_15.jpg",
  },
  {
    id: 3,
    name: "John",
    description:
      "persona que no cambia de opinión o actitud aunque se le den razones convincentes en su contra Es muy testarudo y no habrá nada que lo haga cambiar de parecer.",
    position: "architect",
    img: "https://www.mdzol.com/u/fotografias/m/2021/6/21/f608x342-1072405_1102128_15.jpg",
  },
  {
    id: 4,
    name: "John",
    description:
      "persona que no cambia de opinión o actitud aunque se le den razones convincentes en su contra Es muy testarudo y no habrá nada que lo haga cambiar de parecer.",
    position: "architect",
    img: "https://www.mdzol.com/u/fotografias/m/2021/6/21/f608x342-1072405_1102128_15.jpg",
  },
];

function Clients() {
  return (
    <div className="clients" id="clients">
      <CardReview listclients={listclients} />
    </div>
  );
}
export default Clients;
