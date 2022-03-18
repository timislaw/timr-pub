let factors = createSuggest();
    
availableHours();


renderFactors(factors);


    
    document.querySelector('#add-film').addEventListener('submit', function (e) {
      e.preventDefault();

      let title = e.target.elements.newFilm.value;
      let hours = e.target.elements.filmLength.value;
      const id = uuidv4();

      const timestamp = moment().valueOf();
      factors.push({
        id: id,
        title: title,
        hours: hours,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      saveSuggest(factors);
      location.assign(`edit.html#${id}`);
    });


windows.addEventListener('storage', function (e) {
  if (e.key === 'factors') {
    factors = JSON.parse(e.newValue);
    renderFactors(factors);
  }
})


