const resp = new Map([
  ["doctor", ["register", "profile update"]],
  ["patient", ["treatments", "book appointment", "profile update"]],
  ["center", ["register", "profile update"]],
  ["treatments", ["Vomit", "Ante Natal", "Ayurveda"]],
  ["book appointment", ["https://www.panchkaram.com/search"]],
  [
    "profile update",
    [
      "Login to your dashboard. There you will see a update profile option. If you are still having issues, please contact +91-8955570181.",
    ],
  ],
]);

function getBotResponse(input) {
  input = input.toLowerCase();

  for (let [key, value] of resp.entries()) {
    if (key.toLowerCase().includes(input)) {
      if (value[0].includes("http")) {
        window.location.href = value[0];
        return "Just a second. We got you !";
      }
      const form = document.createElement("form");
      for (let i = 0; i < value.length; i++) {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "know_user";
        input.value = value[i];
        input.id = value[i];
        const label = document.createElement("label");
        label.for = value[i];
        label.innerHTML = value[i];
        form.appendChild(label);
        form.appendChild(input);
      }
      if (form.hasChildNodes()) return form;
    }
  }

  return "Please contact +91-8955570181 for further assistance";
}
