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


const currentTime = function () {
  const min = 1;
  const max = 5;
  let time = Math.floor(Math.random() * (max - min + 1)) + min;
  return time;
};

const availableHours = function () {
  let time = currentTime();
  const p = document.createElement("p");
  p.textContent = `Time is ${time}. Let's check to see what needs to be cleaned.`;
  document.querySelector("#beginning-info").appendChild(p);
};

availableHours();


const renderInfo = function (hours) {
  document.querySelector('#output').innerHTML = '';
  let timeLeft = document.createElement('p');
  timeLeft.textContent = `The time left is ${hours} hour(s)`;
  document.querySelector('#output').append(timeLeft);
  let minHour = document.createElement('p');
  minHour.textContent = `I have at least an hour..`;
  document.querySelector('#output').append(minHour);

};


document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();
  const hoursMath = e.target.elements.timeTil.value;
  e.target.elements.timeTil.value = '';
  const minHour = e.target.elements.checked.value;
  e.target.elements.checked.value = '';
  renderInfo(hoursMath);
  factors.forEach(function (factors) {
    const p = document.createElement('p');
    if (factors.work === true && factors.isClean === false) {
        p.innerHTML = `I still have plenty of time to clean. She's off at ${factors.timeOff}.`;
        document.querySelector('#output').append(p);
    } else if (factors.work === false && factors.isClean === false) {
      p.innerHTML = `I'm sorry, I'll get it done ASAP.`;
      document.querySelector('#output').append(p);
    } else {
      p.innerHTML = `Place is clean, no worries.`;
      document.querySelector('#output').append(p);
    };
 });  

});


