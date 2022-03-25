let createSuggest = () => {
    const filmJSON = localStorage.getItem('factors');

    return filmJSON ? JSON.parse(filmJSON) : [];
};


//saving to local storage
const saveSuggest = (factors) => {
    localStorage.setItem('factors', JSON.stringify(factors));
  };

//remove the suggestion
const deletion = (id) => {
    const factorsIndex = factors.findIndex( (factor) => factor.id === id);
    if (factorsIndex > -1) {
        factors.splice(factorsIndex, 1);
    };
};

  
const movieHours = () => {
    const min = 1;
    const max = 3;
    let time = Math.floor(Math.random() * (max - min + 1)) + min;
    return time;
  };
  
  const availableHours =  () =>  {
    let time = movieHours();
    const p = document.createElement("p");
    p.textContent = `Film should be maximum ${time} hour(s) long.`;
    document.querySelector("#beginning-info").appendChild(p);
  };
  
const deleteButton = (id) => {
    const buttonDel = document.createElement('button');
    buttonDel.textContent = 'remove';
    document.querySelector('#button').appendChild (buttonDel);

    buttonDel.addEventListener('click',  () => {
        deletion(factors.id);
        saveSuggest(factors);
        renderFactors(factors);
    });

}




  const renderFactors = (factors) => {
      document.querySelector('#output').innerHTML = '';

      factors.forEach( (factor) => {
        const factorDiv = document.createElement('div');
        const factorsTitle = document.createElement('div');
        factorsTitle.textContent = `Watch the movie ${factor.title}, it is ${factor.hours} hour(s) long.`;
        document.querySelector('#output').appendChild(factorsTitle);

        deleteButton();
      });

  };



  let lastEdited = (timestamp) => `Edit: ${moment(timestamp).fromNow()}`;