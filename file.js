function createGrid(){
    for (let i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (let ii = 0; ii < 16;ii++) {
            var column = document.createElement('div');
            column.className = "box";
            row.appendChild(column);
        }
        document.getElementById('boxParent').appendChild(row);
    }
    
}
