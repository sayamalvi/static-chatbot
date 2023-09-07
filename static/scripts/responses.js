const resp = new Map([
  ["doctor", ["register", "profile update"]],
  ["patient", ["treatments", "book appointment", "profile update"]],
  ["center", ["register", "profile update"]],
  ["treatments", ["Vomit", "Ante Natal", "Ayurveda"]],
]);

function getBotResponse(input) {
  input = input.toLowerCase();

  for (let [key, value] of resp.entries()) {
    if (key.toLowerCase().includes(input)) {
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
        console.log(input, label);
      }
      if (form.hasChildNodes()) return form;
    }
  }

  return "I didn't understand that:( Please contact +91-8955570181 for further assistance";
}
