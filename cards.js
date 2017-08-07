console.log("Time for Dynamic Cards");




//connect to DOM:
let input = document.getElementById("input-text");
let createBtn = document.getElementById("btn-create");
let cardOutput = document.getElementById("card-output");

//add event listener:
createBtn.addEventListener("click", makeCard);

//create makeCard function:
function makeCard() {
    //get text from input using .value
    let userInput = input.value;
    //create div element for HTML
    let dynamicCard = document.createElement("div");
    //format card
    dynamicCard.innerHTML = `<div id="cards">
    <h3 id="userToDo">${userInput}</h3>
    </div>`;
    //append output to card
    cardOutput.appendChild(dynamicCard);

    //create delete button
    let deleteBtn = document.createElement("BUTTON");
    //create text node for delete button
    let deleteBtntext = document.createTextNode("Task Complete");
    //appened button text to button
    deleteBtn.appendChild(deleteBtntext);
    //append button to card
    dynamicCard.appendChild(deleteBtn);
    //delete button event listener
    deleteBtn.addEventListener("click", deleteCard);
    //delete function to remove card from DOM, deletes child node
    function deleteCard() {
        let card = this.parentNode;
        cardOutput.removeChild(card);
    };

};