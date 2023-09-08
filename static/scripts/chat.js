var coll = document.getElementsByClassName("collapsible");

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
    <div id='initialBotResponse' class='botResponse'>
    <button type='button' value='doctor' onclick="sendButton('doctor')">Doctor</button>
    <button type='button' value='patient' onclick="sendButton('patient')">Patient</button>
    <button type='button' value='center' onclick="sendButton('center')">Center</button>
    </div>
    </p>`;

  let time = getTime();
  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

function getBotResponse(input) {
  input = input.toLowerCase();
  for (let [key, value] of resp.entries()) {
    if (key.toLowerCase().includes(input)) {
      if (value[0].includes("http")) {
        window.location.href = value[0];
        return "Just a second. We got you !";
      }
      const div = document.createElement("div");
      div.classList.add("botResponse");
      for (let i = 0; i < value.length; i++) {
        const button = document.createElement("button");
        button.type = "button";
        button.value = value[i];
        button.textContent = value[i];
        button.onclick = function () {
          sendButton(value[i].toString().toLowerCase());
        };
        div.appendChild(button);
      }
      if (div.hasChildNodes()) return div;
    }
  }
  return "Please contact +91-8955570181 for further assistance";
}
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  if (botResponse instanceof HTMLDivElement) {
    let botHtml = "";
    $("#chatbox").append(botHtml);
    $("#chatbox").append(botResponse);
  } else {
    let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
    $("#chatbox").append(botHtml);
  }
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton(userText) {
  getHardResponse(userText);
}

$("#textInput").keypress(function (e) {
  if (e.which === 13) {
    getResponse();
  }
});
