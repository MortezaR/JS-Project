// const Circle = require("./circle.js");
const Board = require('./board');
// const circles = [];

class Game { 
    constructor(difficulty){
        this.board = new Board(4, difficulty);
        this.score = 0;
        this.difficulty = difficulty;
    }
    draw(canvasEl){
        const ctx = canvasEl.getContext("2d");
        this.board.draw(ctx);
    }
    guess(num){
        if(num == this.board.answers[0]){
            this.score += 2;
            this.board.answers.shift();
            this.board.promptCards.shift();
            if(this.board.promptCards < 1){
                this.board.newBoard(this.difficulty);
            }
        }else{
            this.score -= 1;
        }
    }
}

module.exports = Game;
