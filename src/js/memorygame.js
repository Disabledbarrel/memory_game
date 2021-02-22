
    createBoard(board, cardArrayDouble); // function call to set the game board

    let cards = Array.from(document.querySelectorAll(".memory-card")); // Select all divs with class memory-card

    let firstClick = undefined;
    let nextClick = undefined;
    let lockClick = false;
    let flips = 0;
    let count = 100;
    let counting;
    let counterStart = false;
    let finishedGame = 0;

    function gameClick() {
        if (this === firstClick) return; // Card already flipped
        if(lockClick) return;

        if(!counterStart) {
            timeCounter(); // Start the game timer
        }
        
        // Flip counter
        flips++;
        document.getElementById("flips").innerHTML = flips;

        this.classList.toggle("card-flipped"); // Add/delete class in card div to flip card

        if(firstClick === undefined) {
            firstClick = this;
            return;
        }
        nextClick = this;
        
        if(firstClick.dataset.id === nextClick.dataset.id) { // if it is a match lock cards
            firstClick.removeEventListener("click", gameClick);
            nextClick.removeEventListener("click", gameClick);
            [firstClick, nextClick] = [undefined, undefined]; // Start new round
            finishedGame++;
            if(finishedGame === 6) {
                clearInterval(counting); // Stop counter when all cards are flipped
            }
        } else {
            lockClick = true;
            setTimeout(function() {
                firstClick.classList.remove("card-flipped");
                nextClick.classList.remove("card-flipped");
                [firstClick, nextClick] = [undefined, undefined]; // Start new round and unflip cards
                lockClick = false; // unlock cards again
            }, 1000);
        }
    }

    function resetGame() {
        document.location.href = '';
    }

    function timeCounter() {
        counterStart = true;
        counting = setInterval(function(){
            if(count > 0) {
                count--;
                document.getElementById("time-remaining").innerHTML = count;
            } else {
                clearInterval(counting)
                document.getElementById("times-up").style.display = "block";
                lockClick = true;
            }
        }, 1000);
    }

    cards.forEach(card => card.addEventListener("click", gameClick)); // Add a click event to each card and fire a function when player clicks
