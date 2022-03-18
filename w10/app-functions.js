const createSuggest = function () {
    const filmJSON = localStorage.getItem('factors');

    if (filmJSON !== null) {
        return JSON.parse(filmJSON);

    } else {
        return [];
    };
};


//saving to local storage
const saveSuggest = function (factor) {
    localStorage.setItem('factors', JSON.stringify(factor));
  };

//remove the suggestion
const deletion = function (id) {
    const factorsIndex = factors.findIndex(function (factor) {
      return factor.id === id;
    });
    if (factorsIndex > -1) {
        factors.splice(factorsIndex, 1);
    };
};

  
const movieHours = function () {
    const min = 1;
    const max = 3;
    let time = Math.floor(Math.random() * (max - min + 1)) + min;
    return time;
  };
  
  const availableHours = function () {
    let time = movieHours();
    const p = document.createElement("p");
    p.textContent = `Film should be maximum ${time} hour(s) long.`;
    document.querySelector("#beginning-info").appendChild(p);
  };
  
const deleteButton = function (id) {
    const buttonDel = document.createElement('button');
    buttonDel.textContent = 'remove';
    document.querySelector('#ouput').appendChild(buttonDel);

    buttonDel.addEventListener('click', function () {
        deletion(factors.id);
        saveSuggest(factors);
        renderFactors(factors);
    });

}




  const renderFactors = function (factors) {
      document.querySelector('#output').innerHTML = '';

      factors.forEach(function (factor) {
        const factorDiv = document.createElement('div');
        const factorsTitle = document.createElement('div');
        factorsTitle.textContent = `Watch the movie ${factor.title}, it is ${factor.hours} hour(s) long.`;
        document.querySelector('#output').appendChild(factorsTitle);

        deleteButton();
      });

  };



  const lastEdited = function (timestamp) {
    return `Edit: ${moment(timestamp.fromNow())}`;
  };