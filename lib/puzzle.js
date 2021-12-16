// todo
import func from "./function.js";

console.log("puzzle");

// func();

const tiles = document.querySelectorAll("td");

const movable = (tile) => {
    const tileColumn = tile.cellIndex;
    const tileRow = tile.parentElement.rowIndex;

    const emptyTile = document.querySelector(".empty");
    const emptyColumn = emptyTile.cellIndex;
    const emptyRow = emptyTile.parentElement.rowIndex;

    return ((tileColumn + 1 === emptyColumn || tileColumn - 1 === emptyColumn) && emptyRow === tileRow) || 
    (tileColumn === emptyColumn && emptyRow +1 === tileRow) ||
    (tileColumn === emptyColumn && emptyRow -1 === tileRow) 
};

const move = (tile) => {
    const emptyTile = document.querySelector(".empty");
    emptyTile.classList.remove("empty");
    tile.classList.add("empty");
    emptyTile.innerText = tile.innerText;
    tile.innerText = "";
};

const win = () => {
    const array = Array.from(document.querySelectorAll("td"));
    const empty_array = [];
    array.forEach((td) => {
        if(td.innerText != ""){
            empty_array.push(td.innerText);
        }
    });
    return empty_array.join(";") === "1;2;3;4;5;6;7;8;9;10;11;12;13;14;15" 
};

tiles.forEach((tile) => {
    tile.addEventListener("click", (event) => {
        if(movable(event.currentTarget)) {
            move(tile);
        };
        
        if(win()) {
            alert("You won!!!");
        }
    });
    
});

