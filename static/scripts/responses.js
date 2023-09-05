const resp = new Map([
  [
    "What is panchkaram",
    "Panchakarma is a Sanskrit word that means “five actions” or “five treatments”. This is a process used to clean the body of toxic materials left by disease and poor nutrition",
  ],
  [
    "How can I register as a patient",
    "You can register as a patient by clicking on the register button on the top right corner of the page...",
  ],
  [
    "How can I register as a doctor",
    "You can register as a doctor by clicking on the register button on the top right corner of the page...",
  ],
  [
    "What is the cost of the treatment",
    "The cost of the treatment depends on the type of treatment you are opting for. You can check consultation fees of each doctor on our doctor's page...",
  ],
  [
    "What are the different types of treatments",
    "We offer a wide range of Ayurvedic treatments...",
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
