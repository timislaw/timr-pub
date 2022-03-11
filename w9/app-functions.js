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
  
const deleteButton = function () {
    const buttonDel = document.createElement('button');
    buttonDel.textContent = 'remove';

    buttonDel.addEventListener('click', function () {
        deletion(factor.id);
        saveSuggest(factors);
        renderFactors(factors);
    });

}


const createDOM = function (factor) {
    const factorDiv = document.createElement('div');
    const textEl = document.createElement('span');

    const button = document.createElement('button');
    //set up the remove note button
    button.textContent = 'x';
    noteEl.appendChild(button);
    button.addEventListener('click', function () {
      removeNote(note.id);
      saveNotes(notes)
      renderNotes(notes, filters);
    })

    //setup the note title text
    if (note.title.length > 0) {
      textEl.textContent = note.title;

    } else {
      textEl.textContent = 'unnamed note';
    };
    noteEl.appendChild(textEl)
    return noteEl;
};


  const renderFactors = function (factors) {
      document.querySelector('#output').innerHTML = '';

      factors.forEach(function (factor) {
        const factorDiv = document.createElement('div');
        const factorsTitle = document.createElement('span');
        factorsTitle.textContent = `Watch the movie ${factors.title}, it is ${factors.hours} hour(s) long.`;
        document.querySelector('#output').appendChild(factorsTitle);

        deleteButton();
      });

  };

