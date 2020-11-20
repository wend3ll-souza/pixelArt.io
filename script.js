let masterColor = '#000';
const palleteLength = document.querySelector('#color-palette').children;

function createpalette(number) {
  const square = document.getElementById('color-palette');
  for (key = 0; key < number; key++) {
    let palette = document.createElement('div');
    palette.className = 'color';
    square.appendChild(palette);
  };

};
createpalette(4);
document.querySelector('#color-palette').children[0].style.backgroundColor = '#000';
document.querySelector('#color-palette').children[1].style.backgroundColor = '#255';
document.querySelector('#color-palette').children[2].style.backgroundColor = '#64f';
document.querySelector('#color-palette').children[3].style.backgroundColor = '#0ff';

function createSquare(squareLength) {
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
createSquare(5);
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
  if (event.target.id === 'button') {
    let inputPixelsNumber = document.querySelector('#board-size').value;
    if (inputPixelsNumber === '') {
      alert('Apenas números de 1 a 50, por favor');
      return;
    };
    if (inputPixelsNumber < 5) {
      inputPixelsNumber = 5;
    } else if (inputPixelsNumber > 50) {
      inputPixelsNumber = 50;
    };
    let board = document.getElementById('pixel-board');
    board.innerHTML = '';
    createSquare(inputPixelsNumber);
  };
  if (event.target.id === 'colorNumber') {
    createpalette(document.querySelector('#colors').value);
  }
});
