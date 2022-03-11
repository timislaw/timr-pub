const factors = createSuggest();
    
availableHours();


renderFactors(factors);


    
    document.querySelector('#add-film').addEventListener('submit', function (e) {
      e.preventDefault();

      let title = e.target.elements.newFilm.value;
      let hours = e.target.elements.filmLength.value;

      factors.push({
        id: uuidv4(),
        title: title,
        hours: hours,
      });
      saveSuggest(factors);
      renderFactors(factors);
    });


