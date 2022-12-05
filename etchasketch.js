const gridContainer = document.querySelector('#gridContainer');
function generateGrid(size) {
  for (let i=0; i < size; i++) {
    const row = document.createElement('div')
    row.classList.add('gridRow');
    for (let j=0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('gridCell');
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);

  }
}

generateGrid(16);