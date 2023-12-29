// UI

const gridContainer = document.querySelector('#grid-container');

for (let i = 0; i < 16; i++) {
  for (let k = 0; k < 16; k++) {
    const square = document.createElement('div');
    square.classList.add('cell');
    
    gridContainer.appendChild(square);
  }
}
