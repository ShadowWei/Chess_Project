class board {

    constructor() {

        let svg = d3.select("#BoardSpace")
            .append("svg")
            .attr("id", "svg_view")
            .attr("height", 500)
            .attr("width", 500)
            .style("background-color", "black");

        this.drawBoard();
    }


    drawBoard() {

        let squares = 64;

        d3.select("#svg_view")
            .append("rect")
            .attr("width", 50)
            .attr("height", 50)
            .attr("fill", "white");

    }

}