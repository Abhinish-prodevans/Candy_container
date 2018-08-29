var apiHost, apiPort;

if (env.HOST && env.PORT) {
        apiHost = env.HOST,
        apiPort = env.PORT;
    console.log(apiHost+":"+apiPort);
} else
{
    apiHost = '0.0.0.0';
    apiPort = 8080;
}

console.log(apiServiceName+'\n'+apiHost+'\n'+apiPort);
var callAPI = {

    loadDoc :function()
{
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://${apiHost}:${apiPort}/leaderboard`, true);
    xhttp.send();
    // console.log(xhttp.toString());
},


    setScore :function (score) {
    var xhttp = new XMLHttpRequest();

    var id = storageAPI.get('id');
    console.log(id);
    xhttp.open("GET", `http://${apiHost}:${apiPort}/setScore/${id}/${score}`, true);

    xhttp.send();
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:63342");
    // console.log(xhttp.toString());
},
    createPlayer: function () {
    var xhttp = new XMLHttpRequest();

    var name = callAPI.requestName();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    storageAPI.set('id', this.responseText);
}
    }

    xhttp.open("GET", `http://${apiHost}:${apiPort}/player/${name}`, true);
    xhttp.send();

    },
    requestName : function myFunction() {
        var txt;
        var person = prompt("Please enter your name:", "Harry Potter");
        if (person == null || person == "") {
            txt = "User cancelled the prompt.";
        } else {
            txt = "Hello " + person + "! How are you today?";
        }
        // document.getElementById("demo").innerHTML = txt;
        return person;
    },
    removeId : function() {
        storageAPI.remove('id');
    }
};