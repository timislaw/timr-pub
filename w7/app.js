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


//was thinking of writing a global variable, but decided to keep it within the function of eventlistener

   document.querySelector('#clean').addEventListener('click', function (e) {
    factors.forEach(function (factors) {
        currentTime();
        const p = document.createElement('p');
        if (factors.work === true && factors.isClean === false) {
            p.innerHTML = `${currentTime()} O'clock leaves me plenty of time to clean. She's off at ${factors.timeOff}.`;
            document.querySelector('body').append(p);
        } else if (factors.work === false && factors.isClean === false) {
          p.innerHTML = `I'm sorry, I'll get it done ASAP.`;
          document.querySelector('body').append(p);
        } else {
          p.innerHTML = `Place is clean, no worries.`;
          document.querySelector('body').append(p);
        };
     });  
   });