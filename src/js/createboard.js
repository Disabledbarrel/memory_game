// Array containing memory card info
let cardArray = [ 
    { name: "console", img: "img/console.jpg" },
    { name: "mushroom", img: "img/mushroom.jpg" },
    { name: "nintendo", img: "img/nintendo.jpg" },
    { name: "playstation", img: "img/playstation.jpg" },
    { name: "signal", img: "img/signal.jpg" },
    { name: "super", img: "img/super.jpg" }
];

let cardArrayDouble = cardArray.concat(cardArray); // duplicating the array for the game board

let board = document.querySelector(".memory-game");

// Creating the game board
function createBoard(board, array) {
    shuffle(array);
    array.forEach(card => { 
        let memoryCard = document.createElement("div"); 
        memoryCard.setAttribute("class", "memory-card");
        memoryCard.setAttribute("data-id", card.name); 
        board.appendChild(memoryCard); 

        let frontFace = document.createElement("div");
        frontFace.setAttribute("class", "front-face");
        memoryCard.appendChild(frontFace);
        let frontImg = document.createElement("img");
        frontImg.setAttribute("src", card.img);
        frontFace.appendChild(frontImg);

        let backFace = document.createElement("div");
        backFace.setAttribute("class", "back-face");
        memoryCard.appendChild(backFace);
        let backImg = document.createElement("img");
        backImg.setAttribute("src", "img/tetris.jpg");
        backFace.appendChild(backImg);

        });
}