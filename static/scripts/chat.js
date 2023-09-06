var coll = document.getElementsByClassName("collapsible");
//Remove this after testing

const content = document.querySelector(".content");
content.style.maxHeight = content.scrollHeight + "px";

// for (let i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstBotMessage() {
  document.getElementById("botStarterMessage").innerHTML = `
    <p class="botText">
        Welcome to Panchkaram! Help us get to know you more.
        <form id='startingOptions'>
            <input type="radio" id="doctor" name="know_user" value="doctor">
            <label for="doctor">Doctor</label><br>
            <input type="radio" id="patient" name="know_user" value="patient">
            <label for="patient">Patient</label><br>
            <input type="radio" id="center" name="know_user" value="center">
            <label for="center">Center</label>
        </form>
    </p>`;

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userText = $("#startingOptions");

  var ele = document.getElementsByName("know_user");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) userText = ele[i].value;
  }
  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
