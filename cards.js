console.log("Time for Dynamic Cards");


/* <div id="input-container">
     <input type="text" id="input-text">
        <button type="submit" id="btn-create">Create</button>
        </div id="output-container">
    <h4>Text Here</h4>
    <output name="card-display" id="card-output"></output> */
var makeCards = function() {
    var cards = [];
    console.log("makeCards", makeCards);

    this.getCards = function() {
        return cards;
    }
    this.addCards = function(item) {
        cards.push(item);
    }
    this.addAndRetrieve = function(item) {
        cards.push(item);
        return items;
    }
}();