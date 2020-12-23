let masterColor = '';
const createpalette = () => {
  const square = document.getElementById('color-palette');
  const palette = document.createElement('div');
  palette.className = 'color';
  square.appendChild(palette); 
};
createpalette();

const createSquare = (squareLength) => {
  let square = document.getElementById('pixel-board');
  for (key = 0; key < squareLength; key++) {
    let column = document.createElement('div');
    for (keyTwo = 0; keyTwo < squareLength; keyTwo++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      column.appendChild(pixel);
    };
    square.appendChild(column);
  };
};
createSquare(7);
document.querySelector('#color-palette').children[0].classList.toggle('selected');
addEventListener('click', function (event) {
  if (event.target.className === 'color') {
    masterColor = event.target.style.backgroundColor;
    event.target.classList.toggle('selected');
  } else if (event.target.className === 'color selected') {
    event.target.className = 'color';
  };
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = masterColor;
  };
  if (event.target.id === 'clear-board') {
    let pixel = document.getElementsByClassName('pixel');
    for (key = 0; key < pixel.length; key++) {
      pixel[key].style.background = '#fff';
    };
  };
});

// iro.js

colorPicker = new iro.ColorPicker('#picker', {

  width: 260,

  color: '',

});

var rootStyle = document.querySelector('.color').style;
colorPicker.on(['color:init', 'color:change'], function(color) {
  rootStyle.setProperty('--iro-color-value', color.rgbString);
    values.value = color.hexString;
    masterColor = values.value;
    color = masterColor;
});