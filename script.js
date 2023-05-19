const tovars = {
    tovar1: [
      './assets/jpg/товарФ1.jpg',
      './assets/jpg/товарФ2.jpg',
      './assets/jpg/товарФ3.jpg',
      './assets/jpg/товарФ4.jpg',
      './assets/jpg/товарФ5.jpg',
      './assets/jpg/товарФ6.jpg',
      './assets/jpg/товарФ7.jpg',
        './assets/jpg/товарФ8.jpg',
        './assets/jpg/товарФ9.jpg',
        './assets/jpg/товарФ10.jpg',
        './assets/jpg/товарФ11.jpg',
        './assets/jpg/товарФ12.jpg'
    ],
    tovar2: [
        './assets/jpg/товар7.jpg',
        './assets/jpg/товар8.jpg',
        './assets/jpg/товар9.jpg',
        './assets/jpg/товар10.jpg',
        './assets/jpg/товар11.jpg',
        './assets/jpg/товар12.jpg',
        './assets/jpg/товарК7.jpg',
        './assets/jpg/товарК8.jpg',
        './assets/jpg/товарК9.jpg',
        './assets/jpg/товарК10.jpg',
        './assets/jpg/товарК11.jpg',
        './assets/jpg/товарК12.jpg'
    ]
  }
  const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);


let tovar = 'tovar1';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src = tovars[tovar][index]);
}
  function changeImage (event) {
    tovar = event.target.dataset.tovar;
    redrawPhoto(imagesCenter);
    // const tovarImages = document.querySelector('.tovary1riad').children;
    // Array.from(tovarImages).forEach((image, index) => image.src = tovars[tovar][index]);
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.button__container').children;

  };
 
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.button__container').addEventListener('click', buttonClick);



  


//slider
function shiftPhoto(arrow) {
  const w = window.innerWidth >= 768 ? 6 : 1;
  if (arrow == 'left') {
    tovars[tovar] = tovars[tovar].slice(w).concat(tovars[tovar].slice(0, w));
  } else if (arrow == 'right') {
    tovars[tovar] = tovars[tovar].slice(-w).concat(tovars[tovar].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button__left');
const buttonRight = document.querySelector('.button__right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
