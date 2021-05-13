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
//paint after pressing the button
var color = "#E73C99";
document.querySelector('div').addEventListener(
    "mouseover", function() {
        document.querySelector("div").style.background = color; 
    })

function paintPen(){
    
}
/*
$(document).ready(function(){
    $('div').hover(function(){
      $(this).css("color", "yellow");
      }, function(){
      $(this).css("color", "pink");
    });
  });





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
