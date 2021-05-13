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
function generateColor(name, colors){
const randomColors = colors[Math.floor(Math.random() * colors.length,)];
container.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = randomColors;
});
}

createGrid();


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
