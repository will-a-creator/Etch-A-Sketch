function createGrid(){
    for (let i = 0; i < 16; i++) {
        var row = document.createElement('div', id="abc");
        row.className = "row";
        for (let ii = 0; ii < 16;ii++) {
            var column = document.createElement('div', id = "abc");
            column.className = "box";
            row.appendChild(column);
        }
        document.getElementById('boxParent').appendChild(row);
    }
    
}
let color = 'black';
//paint after pressing the button
var etch = function(){
    var grid = document.getElementsByClassName('box');
    var grid2 = document.getElementById('row');

    Array.from(grid).forEach(v => v.addEventListener('mouseover', function(){
        v.style.background =color;
    
    }));
};
//copied from stack overflow! 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function colorGrid(){
    color = getRandomColor();
    etch();
    
}

createGrid();
etch();
defaultEtch();



//clear (does not work)
const buttonClear = document.querySelector('.clear');
buttonClear.addEventListener('click', erase);

function erase(){
    createGrid();
}

/*
const container = document.querySelector('.page');
const btnBlack = document.createElement('button');
const buttonsCont = document.querySelector('buttons');

function paintPen(){
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'Pen';
    btnBlack.addEventListener('click', ()=> {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let Rnum = Math.floor(Math.random()*255);
            box.getElementsByClassName.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))
    })
    buttonsCont.appendChild(btnBlack).classList.add('btn')
}
paintPen(); */
