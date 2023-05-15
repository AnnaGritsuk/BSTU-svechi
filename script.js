const tovars = {
    tovar1: [
      'https://damion.club/uploads/posts/2022-02/1645031929_36-damion-club-p-krasivie-zimnie-kartinki-priroda-40.jpg',
      'https://gagaru.club/uploads/posts/2023-02/1676708280_gagaru-club-p-zimnie-peizazhi-krasivie-kartini-krasivo-6.jpg',
      'https://proprikol.ru/wp-content/uploads/2019/12/krasivye-kartinki-pro-zimu-62.jpg'
    ],
    tovar2: [
      'https://mirpozitiva.ru/wp-content/uploads/2019/11/1478782975_ptichka_sakura.jpg',
      'https://uprostim.com/wp-content/uploads/2021/04/image034-4.jpg',
      'https://vsegda-pomnim.com/uploads/posts/2022-04/1649130823_61-vsegda-pomnim-com-p-krasivaya-vesennyaya-priroda-foto-71.jpg'
    ]
  }
  
  
  function changeImage (event) {
    const season = event.target.dataset.season;
    const seasonImages = document.querySelector('.photo__image').children;
    Array.from(seasonImages).forEach((image, index) => image.src = seasons[season][index]);
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.photo__buttons').children;
    Array.from(buttons).forEach(button => {
      if (button.dataset.season == season) {
        button.classList.add('button_color');
      } else {
        button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.photo__buttons').addEventListener('click', buttonClick);