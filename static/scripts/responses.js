let resp = {
  "What is panchkaram":
    "Panchakarma is a Sanskrit word that means “five actions” or “five treatments”. This is a process used to clean the body of toxic materials left by disease and poor nutrition. Normally the body has the innate ability to efficiently process and remove these waste materials, including the vitiated doshas. However due to one’s repeated dietary indiscretions, poor exercise patterns, lifestyle, and genetic predisposition, the digestive enzymes, metabolic co-factors, hormones, and agnis which regulate the body’s internal homeostasis become disorganized. This can lead to the accumulation and spread of toxins throughout the physiology resulting in disease. This waste matter is called ama in Ayurveda. Ama is a foul-smelling, sticky, harmful substance that needs to be completely evacuated from the body.",
  "How can I register as a patient":
    "You can register as a patient by clicking on the register button on the top right corner of the page",
  "How can I register as a doctor":
    "You can register as a doctor by clicking on the register button on the top right corner of the page",
  "What is the cost of the treatment":
    "The cost of the treatment depends on the type of treatment you are opting for. You can check consultation fees of each doctor on our doctor's page",
    "What are the different types of treatments":"We offer a wide range of Ayurvedic treatments"
};
function getBotResponse(input) {
  return resp[input];
}
