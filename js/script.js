const itemsWrapper = document.querySelector(".items-wrapper");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

images.push(" ");

images.forEach((game) =>{
  itemsWrapper.innerHTML += `<img src = "${game.image}" class ="items hide">`
})


const itemsCollection = document.getElementsByClassName("items");

let counterImg = 0;
itemsCollection[counterImg].classList.remove("hide");

btnUp.addEventListener("click", function(){
  itemsCollection[counterImg].classList.add("hide");

  counterImg++;

  itemsCollection[counterImg].classList.remove("hide");
  
  if (counterImg === (itemsCollection.length - 1)){
    itemsCollection[counterImg].classList.add("hide");

    counterImg = 0;

    itemsCollection[counterImg].classList.remove("hide");
  }
}) 

btnDown.addEventListener("click", function(){
  if(counterImg === 0){
    itemsCollection[counterImg].classList.add("hide");

    counterImg = (itemsCollection.length - 2);

    itemsCollection[counterImg].classList.remove("hide");
  }else{
    itemsCollection[counterImg].classList.add("hide");

    counterImg--;

    itemsCollection[counterImg].classList.remove("hide");
  }
}) 