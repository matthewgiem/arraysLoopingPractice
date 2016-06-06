// backend business logic
var groceryArray =[];
var cards = [];
var longText = "";
// all caps, alphabitize, and pring list while hiding form
var printList = function()  {
  groceryCaps = groceryArray.sort().map(function(grocery){
    return grocery.toUpperCase();
  });
  groceryCaps.forEach(function(grocery)  {
    $("#printedList").append("<li>" + grocery + "</li>");
  });
}

// Splits a sentence into an array of words
var parseSentence = function(sentence) {
  return filteredArray = sentence.split(" ").filter(greaterThan).reverse().toString();
}
// splits a sentence in an array words with sting length of x
var greaterThan = function(value) {
  return value.length >= 3;
}

// building the deck
var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var ranks = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
suits.forEach(function(suit)  {
  ranks.forEach(function(rank){
    cards.push(rank+" of "+suit);
  });
});
wordOrder = function(textBlock){
  orderedWords = textBlock.split(" ").sort();
  orderedWords.reduce(function(previousValue, currentValue){
    if (previousValue === currentValue) {
      previousValue[currentValue]++;
    }
    else{
      previousValue[currentValue]=1
    }
    return previousValue
  });
}


// frontend user interface logic
$(document).ready(function(){
  // add items to grocery list
  $("#groceryList").submit(function()  {
    var item = $("#groceryInput").val();
    groceryArray.push(item);
    $("#groceryInput").val("");
    event.preventDefault();
  });
  //print grocery list
  $("#groceryPrint").click(function(){
    printList();
    $("#groceryList").hide();
  });
  // sentence parsing input button
  $("#sentenceParse").submit(function()  {
    $(".parseResult").text(parseSentence($("#sentenceParseInput").val())).show();
    event.preventDefault();
  });
  // build a deck of cards
  $("#deckBuilder").click(function(){
    cards.forEach(function(card){
      $("#cardDeck").append("<li class='card'>"+card+"</li>")
    });
  });
  //collapses the deck of cards
  $("#deckCollapser").click(function(){
    $(".card").hide();
  });

  //takes the input of the large text input zone
  $("#textBlock").submit(function(){
    longText = $("#blockInput").val();
    console.log(longText);
    alert(wordOrder([1,3,2,4,1,2,3,4,1,3]));

    event.preventDefault();
  });
});
