var callAPI = {

    loadDoc :function()
{
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://127.0.0.1:3000/leaderboard", true);
    xhttp.send();
    // console.log(xhttp.toString());
},
//
// function setScore(score) {
//     var xhttp = new XMLHttpRequest();
//
//     var score1 = '{"score":'+score+'}';
//     var scorejson = JSON.parse(score1);
//
//     console.log(score1);
//     xhttp.open("POST", "http://127.0.0.1:3000/setScore/5a9795e9fa48ebb803d8506d", true);
//     xhttp.setRequestHeader("Content-type", "application/json");
//     xhttp.send(score1);
//
//     // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:63342");
//     // console.log(xhttp.toString());
// }

    setScore :function (score) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://127.0.0.1:3000/setScore/5a9795e9fa48ebb803d8506d/${score}`, true);

    xhttp.send();
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:63342");
    // console.log(xhttp.toString());
}
};