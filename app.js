import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

//TITLE
const title = '';

const showBackground = true;

const background = (
  <img 
    className ='background'
    alt ='ocean'
    src ='/images/ocean.jpg'
  />
);

//declaring images and using for..in to iterate
const images = [];

for(const animal in animals) {
  images.push(<img 
     key = {animal}
     className= 'animal'
     alt= {animal}
     src= {animals[animal].image}
     aria-label= {animal}
     role= 'button'
     onClick = {displayFact}
/>
)
};


function displayFact (e) {
    const selectAnimal = e.target.alt;
    const animalInfo = animals[selectAnimal];
    const randomInde = Math.floor(Math.random() *animalInfo.facts.length);

    const funFact = animalInfo.facts[randomInde];

 document.getElementById('fact').innerHTML = funFact;
}

//DECLARING ANIMALFACTS VARIABLE
const animalFacts = (
 <div>
  <h1> 
    {title || 'Click an animal for a fun fact!'}
  </h1>
    {showBackground && background}
    <p id= 'fact'></p>
    <div className ='animals' > {images} </div>
    
</div>
);

//REACTDOM DECLARATION
ReactDOM.render(
  animalFacts,
  document.getElementById('root')
);
