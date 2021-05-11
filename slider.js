sliders = document.getElementsByClassName('image.slider')
for (let i = 0; i < sliders.length; i++) {
  slider = sliders.item(i);
  let div = document.createElement('div');
  let img = slider.querySelector('img');
  slider.insertBefore(img, div);
  div.appendChild(img);

  let range = document.createElement('input');
  range.type = 'range';
  range.oninput = function () {
    div.style.width = this.value + '%';
  };
  slider.appendChild(range);  
}
// forEach(function(slider) {
//   let div = document.createElement('div');
//   let img = slider.querySelector('img');
//   slider.insertBefore(img, div);
//   div.appendChild(img);

//   let range = document.createElement('input');
//   range.type = 'range';
//   range.oninput = function() {
//     div.style.width = this.value + '%';
//   };
//   slider.appendChild(range);
// });