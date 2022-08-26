import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios";

function TinderCards() {
  //   const [people, setPeople] = useState([
  //     {
  //       name: "Elon Musk",
  //       url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
  //     },
  //     {
  //       name: "Jeff Bezoz",
  //       url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
  //     },
  //   ]);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // cuz base url already set up in axios.js
      const req = await axios.get("/tinder/cards");

      // whatever the request.data comes back us
      setPeople(req.data);
    }

    fetchData();
  }, []);

  //   console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);

    //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            noSwipe={(dir) => swiped(dir, person.name)}
            noCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
