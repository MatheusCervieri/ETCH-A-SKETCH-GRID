
const container = document.querySelector('#container');
const interface = document.querySelector('#interface');
const linesinput = document.getElementById('lines').value;
const button = document.getElementById('clmsbtn');

let divs = []; //divs.
let columns = 0;
let lines = 0;



  button.addEventListener('click', () => {
    container.innerHTML = "";
    lines = document.getElementById('lines').value;
    columns = document.getElementById('Columns').value;
    if (lines > 100 || columns > 100){
      alert("The number input should be less then 100");
    }
    else{
    makegrid(columns,lines);
    }
  });
function makegrid(columnsn,linesn){
for (i=0 ; i < columnsn * linesn; i++) {
    divs.push(document.createElement('div'));
    container.appendChild(divs[i]);
    divs[i].className = "box";
    divs[i].addEventListener("mouseover", function (e){
               
        e.target.style.background = colorGen();
          console.log("blue");
      });
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${parseInt(columnsn)}, 2fr)`
      );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${parseInt(linesn)}, 2fr)`
      );
    }
}
function colorGen() {
  let rgbcolor = "";
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  rgbcolor = "rgb(" + r + "," + g + "," + b + ")";
  return rgbcolor;
}