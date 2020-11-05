
var startBox = document.querySelector("#startbox");
var startBtn = document.querySelector("#startBtn");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var button5 = document.querySelector("#button5");
var highscoreForm = document.querySelector("#highscore");
var score = document.querySelector("#score");
var yourscore = document.querySelector("#yourscore");
var nametext = document.querySelector("#nametext");
var playerList = document.querySelector("#player-list");
var highscoresBox = document.querySelector("#highscoresbox");
var scoresgo = document.querySelector("#scoresgo");
var quizback = document.querySelector("#quizback");
var scores = document.querySelector("#scores");
var timer = document.querySelector("#timer");

var players = "";
var vari = "";
var code = "";
var css = "";
var jason = "";
var tag = "";

var sec = 15;
var time = "";

//FUNCTIONS


function tryagain(){
    location.replace("timeout.html");
};


function start(){
    startBox.setAttribute("style", "display: none;");
    question1.setAttribute("style", "display: block;");
    
};

function getSaved(){
   var scoreSave = JSON.parse(localStorage.getItem("scoreSaved"));  
   if (scoreSave !== null){
      players = scoreSave;
    }
    renderScore();
};

function renderScore(){  
    playerList.innerHTML = "";  
    for (var i = 0; i < players.length; i++) {
      var player = players[i];  

      var li = document.createElement("li");
      li.textContent = player;      
      li.setAttribute("data-index", i);   

      playerList.appendChild(li);      
    }
    saveScore();
}

function saveScore(){  
    if (players !== null){
        localStorage.setItem("scoreSaved", JSON.stringify(players));
    };
};

function getScore(){ 
    var scoretotal = ""; 
    scoreAdd = parseFloat(vari) + parseFloat(code) + parseFloat(css) + parseFloat(jason) + parseFloat(tag);      
    var scoretotal = scoreAdd;
    console.log(scoretotal); 
    score.textContent = scoretotal;
  };

function myTimer() {
    timer.innerHTML = sec + " seconds left";
    sec--;
    if (sec == -1) {
        clearInterval(myTimer);
        alert("Time out!!");
        tryagain();        
    }      
};

//EVENT LISTENERS

getSaved();

startBtn.addEventListener("click", function(event){
    event.preventDefault();
    scores.setAttribute("style", "display: none;")    
    start();
    setInterval(myTimer, 1000);    
});

button1.addEventListener("click", function(event){
    event.preventDefault();
    vari = parseInt(document.querySelector('input[name = "vari"]:checked').value);
    console.log(vari);
    if (vari > 0){
        sec++;
        console.log("extra time!");
    } else if (vari === 0) {
        sec--;
        console.log("oh no!");
    }
    startBox.setAttribute("style", "display: none;");   
    question1.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: block;");
});

button2.addEventListener("click", function(event){
    event.preventDefault();
    code = parseInt(document.querySelector('input[name = "code"]:checked').value);
    console.log(code);
    if (code > 0){
        sec++;
        console.log("extra time!");
    } else if (code === 0) {
        sec--;
        console.log("oh no!");
    }
    startBox.setAttribute("style", "display: none;");
    question2.setAttribute("style", "display: none;");
    question3.setAttribute("style", "display: block;")	   
});

button3.addEventListener("click", function(event){
    event.preventDefault();
    css = parseInt(document.querySelector('input[name = "css"]:checked').value);    
    console.log(css);
    if (css > 0){
        sec++;
        console.log("extra time!");
    } else if (css === 0) {
        sec--;
        console.log("oh no!");
    }
    startBox.setAttribute("style", "display: none;"); 
    question3.setAttribute("style", "display: none;");
    question4.setAttribute("style", "display: block;")	   
});

button4.addEventListener("click", function(event){
    event.preventDefault();
    jason = parseInt(document.querySelector('input[name = "jason"]:checked').value);    
    console.log(jason);
    if (jason > 0){
        sec++;
        console.log("extra time!");
    } else if (jason === 0) {
        sec--;
        console.log("oh no!");
    }
    startBox.setAttribute("style", "display: none;"); 
    question4.setAttribute("style", "display: none;");
    question5.setAttribute("style", "display: block;")	   
});

button5.addEventListener("click", function(event){
    event.preventDefault();
    clearInterval(myTimer);
    tag = parseInt(document.querySelector('input[name = "tag"]:checked').value);
    console.log(tag);
    getScore();
    startBox.setAttribute("style", "display: none;");
    question5.setAttribute("style", "display: none;");
    yourscore.setAttribute("style", "display: block;");
    highscoresBox.setAttribute("style", "display: block;") 
}); 

scoresgo.addEventListener("click", function(event){
    getSaved();
    event.preventDefault();
    startBox.setAttribute("style", "display: none;");
    scores.setAttribute("style", "display: none;")
    timer.setAttribute("style", "display: none;")
    highscoresBox.setAttribute("style", "display: block;");
});

quizback.addEventListener("click", function(event){
    event.preventDefault();
    yourscore.setAttribute("style", "display: none;");
    startBox.setAttribute("style", "display: block;");
    scores.setAttribute("style", "display: block;")
    timer.setAttribute("style", "display: block;")
    highscoresBox.setAttribute("style", "display: none;");
});


highscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();    
    var name = nametext.value.trim();    
    if (name === "") {
        return;
    } else {
    players.push(name + " score: " + scoreAdd);
    nametext.value = "";
    alert("Player saved!")    
    saveScore();
    renderScore();
    };    
});
saveScore();
renderScore();


  
