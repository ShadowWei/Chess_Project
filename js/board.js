class board {

    constructor() {

        this.drawBoard();
    }


    drawBoard() {

        let squares = 64;

        let svg = d3.select("#BoardSpace").append("svg");

        svg.style("background-color", "black");
    }

}