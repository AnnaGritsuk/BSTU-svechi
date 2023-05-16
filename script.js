const tovars = {
    tovar1: [
      './assets/jpg/товар1.jpg',
      './assets/jpg/товар2.jpg',
      './assets/jpg/товар3.jpg',
      './assets/jpg/товар4.jpg',
      './assets/jpg/товар5.jpg',
      './assets/jpg/товар6.jpg'
    ],
    tovar2: [
        './assets/jpg/товар7.jpg',
        './assets/jpg/товар8.jpg',
        './assets/jpg/товар9.jpg',
        './assets/jpg/товар10.jpg',
        './assets/jpg/товар11.jpg',
        './assets/jpg/товар12.jpg'
    ]
  }
  
  
  function changeImage (event) {
    const tovar = event.target.dataset.tovar;
    const tovarImages = document.querySelector('.tovary1riad').children;
    Array.from(tovarImages).forEach((image, index) => image.src = tovars[tovar][index]);
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.button__container').children;
    // Array.from(buttons).forEach(button => {
    //   if (button.dataset.tovar == tovar) {
    //     button.classList.add('button_color');
    //   } else {
    //     button.classList.remove('button_color');
    //   };
    // });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.button__container').addEventListener('click', buttonClick);