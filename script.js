
var startBox = document.querySelector("#startbox");
var startBtn = document.querySelector("#startBtn");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var yourscore = document.querySelector("#score");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var highscoreForm = document.querySelector("#highscore");
var playerList = document.querySelector("#playerlist");

var players = [];

//FUNCTIONS

function start(){
    startBox.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: block;");
};

function getSaved(){
   var scoreSaved = JSON.parse(localStorage.getItem("score"));  
   if (scoreSaved !== null){
      score = scoreSaved;
    }
};

function getScore(){
    var score = ""; 
    score = variable + code + css + _____ + _____;
    yourscore.textContent(score);
};

function renderScore(){
    playerList.innerHTML = "";
    for (var i = 0; i < player.length; i++) {
      var players = player[i];
  
      var li = document.createElement("li");
      li.textContent = players;
      li.setAttribute("data-index", i);
  
      var button = document.createElement("button");
      button.textContent = "Clear";
  
      li.appendChild(button);
      playerList.appendChild(li);
      saveScore();
    }
}

function saveScore(){  
    if (player !== null){
        localStorage.setItem("scoreSaved", JSON.stringify(score));
    };
};

//EVENT LISTENERS

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    start();
});

button1.addEventListener("click", function(event){
    event.preventDefault();
    var variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    console.log(variable);
    startBox.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: block;");
});

button2.addEventListener("click", function(event){
    event.preventDefault();
    var code = parseInt(document.querySelector('input[name = "code"]:checked').value);
    console.log(code);
    startBox.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: none;");
    question3.setAttribute("style", "display: block;")	   
});

button3.addEventListener("click", function(event){
    event.preventDefault();
    var css = parseInt(document.querySelector('input[name = "css"]:checked').value);    
    console.log(css);
    startBox.setAttribute("style", "display: none;"); 
    question3.setAttribute("style", "display: none;");
    question4.setAttribute("style", "display: block;")	   
});

//document.getElementById("form4").onsubmit=function() {
    //--- = parseInt(document.querySelector('input[name = "---"]:checked').value);    
   // scoreString.push(---);
    //question4.setAttribute("style", "display: none;");
    //question5.setAttribute("style", "display: block;")	   
//};

//document.getElementById("form5").onsubmit=function() {
   // --- = parseInt(document.querySelector('input[name = "---"]:checked').value);
    //scoreString.push(---);    
    //question5.setAttribute("style", "display: none;");
    //yourscore.setAttribute("style", "display: block;")	   
//};       

highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();    
    var nameText = nameInput.value.trim();    
    if (nameText === "") {
        return;
    }

    player.push(nameText + score);
    nameInput.value = "";
    saveScore();
    renderScore();
});
  
