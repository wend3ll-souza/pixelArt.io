// Pixel Art 


// Variavel que receberá o valor da cor a ser pintada no quatro de pixels
let masterColor = '';

/* Função que cria element square, quadrado que indica cor selecionada.Usa uma constante para indicar o element DOM a ser atacado e uma constante para criar o element que irá indicar a cor. O segundo elemento criado recebe a classe que irá estiliza-lo e é anexado ao ao elemento ancora. */
const squareIndication = () => {
  const squareContainer = document.getElementById('color-palette');
  const square = document.createElement('div');
  square.id = 'colorIndicator';
  square.className = 'color';
  squareContainer.appendChild(square); 
};
squareIndication();

/* Função que cria quadro onde pode-se desenhar a pixel art. Usa uma constante, Para indicar o elemento DOM a ser a atacado. Depois cria um ciclo de repetição para criar os elementos que contem um elemento para armazenar as colunas. Dentro de ciclo tem outro ciclo para colocar os elementos estilizados dentro de cada coluna. Depois dentro do primeiro ciclo é anexado o retorno de cada coluna.*/
const createPixelBoard = () => {
  const pixelBoard = document.getElementById('pixel-board');
  for (key = 0; key <= 7; key++) {
    const column = document.createElement('div');
    for (keyTwo = 0; keyTwo <= 7; keyTwo++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      column.appendChild(pixel);
    };
    pixelBoard.appendChild(column);
  };
};
createPixelBoard();

// Criando seletor de cores com a biblioteca iro.js.
// constante que armazena o objeto que passa as configurações do picker, como elemento ancora, tamanho e cor inicial.
const colorPicker = new iro.ColorPicker('#picker', {
  width: 150,
  color: '#f00',
});

// configurando a constante rootStyle como sendo igual a cor de element colorindicador
const rootStyle = document.getElementById('colorIndicator').style;

/* Metodo on da iro.js. Recebe um array com as chaves do picker e uma função que set uma variavel de cor que será usada no CSS e uma variavel que hex que contem as cores do picker em hexadecimal. Isso será mostradado no input de de mudandança do cor. Por fim a variavel masterColor recebe a cor contida em hex para que os pixels possam ser pintados dessa cor. */
colorPicker.on(['color:init', 'color:change'], function(color) {
  rootStyle.setProperty('--iro-color-value', color.rgbString);
  let hex = color.hexString;
  document.getElementById('values1').value = hex;
  masterColor = hex;
});

// Eventos de Click.
addEventListener('click', function (event) {
  // Se clicar no elemento com a classe pixel o elemento terá a cor de fundo igual a variavel masterColor.
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = masterColor;
  };

  // Se clicar no elemento com o id clear-board, todos os elementos com classe pixel receberam a cor branca
  if (event.target.id === 'clear-board') {
    let pixel = document.getElementsByClassName('pixel');
    for (key = 0; key < pixel.length; key++) {
      pixel[key].style.background = '#fff';
    };
  };

  // Se clicar no elemento com o id change-color, a variavel masterColor irá receber o value do inpurt values1 e o color picker recebera a cor de masterColor
  if(event.target.id === 'change-color'){
    masterColor = document.getElementById('values1').value;
    colorPicker.color.hex8String = masterColor;
  }
});
