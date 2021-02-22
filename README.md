# Frontend Home Assignment Internship

Welcome to my, Elin Larsson's, README for my Memory Game.

## Getting started

I've used Node.js and Gulp to automize the process. Node is downloaded and installed via nodejs.org. To install the Gulp-cli write 'npm install gulp-cli -g' in your terminal.

To get the project up and running move to the project directory in the terminal and then write 'npm install' to get all the npm packages installed.
I've used the following npm-packages:
* gulp (dev-dependency for automatization)
* gulp-concat (dev-dependency for concatinating files)
* gulp-uglify-es (dev-dependency for minifying js-files)
* browser-sync (dev-dependency for live reload)
* del (dev-dependency for deleting files and directories)
* gulp-sass & node-sass (dev-dependency for using and compiling Sass)

The project includes a gulp-file with tasks for automatization. The gulp file includes comments to understand how it works.
To run the project in dev-mode simply write 'gulp' in the terminal (make sure to be in the projects directory).

## Decisions

### HTML and Styling

I've used Sass in this project to save time but to still be able to style the game. I've split the styling into multiple scss-files for better readability. The files are named and commented in a logical way. Images are taken from free sources. I've made the game responsive for smartphones and set up mediaqueries for other screen sizes as well. I also generated a Lighthouse-report in Google Chrome, which gave  a result of 77 in accessibility. I've added css to animate the cards when they flip over.

### Game functionality
I separated the game functionality into different JavaScript files for better readability.
Functionality to set the game board is found in createboard.js. The game board is set dynamically. Each matching card is given a matching id to use when checking for matches during the game.
Memorygame.js contains the game functionality itself. A single function gameClick checks for clicks and matches. I've added a countdown for the game, and another feature that counts the number of flips required to finish the game.

I wanted to use the known and preffered Fisher-Yates algorithm to shuffle the cards on the game board. I put the shuffle function in a separate file, shuffle.js. The source code for this function can be found here (as I did not write the code for shuffeling myself):
https://github.com/pazguille/shuffle-array/blob/master/index.js

## Some future steps
* Some refactoring of the code, perhaps split the gameClick-function into multiple functions.
* Keep count of highscore
* Perhaps use a bigger game board and get images dynamically for a greater variaty
* Implement different degrees of difficulty


