const newGridButton = document.querySelector('#newGrid');
const gridContainer = document.querySelector('#gridContainer');
function generateGrid(size) {
  if (size > 100) {
    alert("Must be under 100");
    return;
  }
  
  // clear out existing grid, if any
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

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
  console.log('generated new grid');
}

function colorCell(cell) {
  cell.style.backgroundColor = "#666666";
}

generateGrid(16);

newGridButton.addEventListener('click', () => {
  const gridSize = prompt("How many cells wide/high? (max 100)", "16");
  generateGrid(gridSize);
});