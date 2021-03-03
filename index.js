// ;
// var path = ["Web Dev\Dicee Challenge - Starting Files\images\dice1.png", "Web Dev\Dicee Challenge - Starting Files\images\dice2.png", "Web Dev\Dicee Challenge - Starting Files\images\dice3.png", "Web Dev\Dicee Challenge - Starting Files\images\dice4.png", "Web Dev\Dicee Challenge - Starting Files\images\dice5.png", "Web Dev\Dicee Challenge - Starting Files\images\dice6.png"];
var path = ["images\\dice1.png", "images\\dice2.png", "images\\dice3.png", "images\\dice4.png", "images\\dice5.png", "images\\dice6.png"];
// if (document.querySelector("h1").innerHTML == "Refresh Me!")
//     func();
// else
//     document.querySelector("h1").innerHTML = "Refresh Me!"
func();
function func() {
    var p1 = Math.floor(Math.random() * 6);
    var p2 = Math.floor(Math.random() * 6);
    document.querySelector(".img1").src = path[p1];
    document.querySelector(".img2").src = path[p2];
    if (p1 > p2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
    } else if (p2 > p1) {
        // document.querySelector("h1").style.fontSize="3rem";
        document.querySelector("h1").innerHTML = "Player 2 Wins🚩!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!!"
    }
}