
const titleElement = document.querySelector('#film-title');
const removeElement = document.querySelector('#remove-film');
const dateElement = document.querySelector('#edit');
const factorId = location.hash.substring(1);
let factors = createSuggest();
let factor = factors.find( (factor) => factor.id === factorId);

if (!factor) {
    location.assign('index.html');
};

titleElement.value = factors.title;
dateElement.textContent = lastEdited(factors.updatedAt);


//anything with multiple lines of code I did not end up using shorthand arrow functions
titleElement.addEventListener('input',  (e) => {
    factor.title = e.target.value;
    factor.updatedAt = moment().valueOf();
    dateElement.textContent = lastEdited(factor.updatedAt);
    createSuggest(factors);
});


removeElement.addEventListener('click', (e) => {
    removeNote(note.id);
    createSuggest(factors);
    location.assign('index.html');
});

window.addEventListener('storage', (e) => {
    if (e.key === 'factors') {
        factors = JSON.parse(e.newValue)
        factor = factors.find((factors) => factors.id === factorId);
        
        //couldn't refactor into ternary operator
        if (!factor) {
            location.assign('index.html');
        };
        
        titleElement.value = factor.title;
        dateElement.textContent = lastEdited(factor.updatedAt);
    };
});

