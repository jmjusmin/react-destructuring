// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
//import animals, { useAnimals } from "./data";

// console.log(animals);
// const [cat, dog] = animals;

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// console.log(cat.sound)
//const {name,sound}=cat;

//we can set the propoty name
//const {name : catName,catSound}=cat;

//give a property a default value
//const {name="Fluffy", sound = "Purr"} = cat

//nested object
// const {
//   name,
//   sound,
//   feeding: { food, water }
// } = cat;

// console.log(food);

//destructure from array
const [honda, tesla] = cars;
// console.log(cars);

//destructure an object
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
