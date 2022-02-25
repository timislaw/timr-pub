const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};


const currentTime = function () {
    const min = 1;
    const max = 6;
    let time = Math.floor(Math.random() * (max - min + 1)) + min;
    return time;
  };


const factors = [
  { work: true, 
    isClean: false, 
    timeOff: 6 },
  { work: true, 
    isClean: true, 
    timeOff: 6 },
  { work: false, 
    isClean: false, 
    timeOff: 6 },
  { work: false, 
    isClean: true, 
    timeOff: 6 },
];

factors.forEach(function (factors) {
    currentTime();
    if (factors.work === true && factors.isClean === false) {
        showOnPage(`${currentTime()} O'clock leaves me plenty of time to clean. She's off at ${factors.timeOff}.`);
    } else if (factors.work === false && factors.isClean === false) {
        showOnPage(`I'm sorry, I'll get it done ASAP.`);
    } else {
        showOnPage(`Place is clean, no worries.`);
    };
 });
