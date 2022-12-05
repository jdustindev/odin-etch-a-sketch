const gridContainer = document.querySelector('#gridContainer');
function generateGrid(size) {
  for (let i=0; i < size; i++) {
    const row = document.createElement('div')
    row.classList.add('gridRow');
    for (let j=0; j < size; j++) {
      const cell = document.createElement('div');
      cell.classList.add('gridCell');

      cell.addEventListener('mouseover', () => {
        colorCell(cell);
      })

      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}

function colorCell(cell) {
  cell.style.backgroundColor = "#666666";
}

generateGrid(16);