var randomNumber = Math.round(Math.random()*100);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var msg
console.log(randomNumber);

submitButton.onclick = () => {
    var input = document.getElementById("input-number").value;
    lives--;
    if(input == randomNumber)
    {

    }
    else if(input > randomNumber)
    {
        msg = "It is not Lucky Number!"
    }
    else if(input < randomNumber)
    {
        msg = "It is Not record found"
    }
    else if(lives == 0)
    {

    }

    message.style.display = "inherit";
    message.innerHTML = msg;
}