const resp = new Map([
  ["doctor", ["register", "profile update"]],
  [
    "patient",
    ["treatments,book appointment", "profile update", "view appointment"],
  ],
]);

function getBotResponse(input) {
  input = input.toLowerCase();

  if (resp.has(input)) {
    return resp.get(input);
  }
  const words = input.split(" ");
  //   console.log(words);
  let possibleResponses = [];
  for (let i = 0; i < words.length; i++) {
    for (let [key, value] of resp.entries()) {
      if (key.toLowerCase().includes(words[i])) {
        possibleResponses.push(value);
      }
    }
  }
  if (possibleResponses.length > 0) {
    return possibleResponses[0];
  }
  return "I didn't understand that:( Please contact +91-8955570181 for further assistance";
}
