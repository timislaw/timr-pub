

const titleElement = document.querySelector('#film-title');
const removeElement = document.querySelector('#remove-film');
const dateElement = document.querySelector('#edit');
const factorId = location.hash.substring(1);
let factors = saveSuggest();
let factor = factors.find(function (factor) {
    return factor.id === factorId;
});

if (factor === undefined) {
    location.assign('index.html');
};

titleElement.value = factor.title;
dateElement.textContent = generateLastEdited(factor.updatedAt);

titleElement.addEventListener('input', function (e) {
    factor.title = e.target.value;
    factor.updatedAt = moment().valueOf();
    dateElement.textContent = lastEdited(factor.updatedAt);
    saveSuggest(factors);
});


removeElement.addEventListener('click', function (e) {
    removeNote(note.id);
    saveSuggest(factors);
    location.assign('index.html');
});

window.addEventListener('storage', function (e) {
    if (e.key === 'factors') {
        factors = JSON.parse(e.newValue)
        factor = factors.find(function (factor) {
            return factor.id === factorId;
        });
        
        if (factor === undefined) {
            location.assign('index.html');
        };
        
        titleElement.value = factor.title;
        dateElement.textContent = lastEdited(factor.updatedAt);
    };
});

