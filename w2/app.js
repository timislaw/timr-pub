const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
};

let houseClean = false;

let gfAtWork = true;

let time = 4;

showOnPage('Is the house clean:');
showOnPage(houseClean);
showOnPage('Is she currently at work:');
showOnPage(gfAtWork);
showOnPage('Time:');
showOnPage(time);

if (gfAtWork === true && houseClean === false) {
    let checkTime = `Let's see how much time I have.`
    showOnPage(checkTime)
        if (time < 6) {
            let startCleaning = true;
            showOnPage('I have some time, so start cleaning.')
        } else if (time >= 6) {
            let apologize = 'I will get it done, sorry.'
            showOnPage(apologize)
        } else {
            let makeUp = 'I will fix this tomorrow.'
            showOnPage(makeUp)
        };
} else {
    let doNothing = true;
    showOnPage('I can relax.')
};

showOnPage('<br></br>')

houseClean = true;
gfAtWork = true;
time = 5;

showOnPage('Is the house clean:');
showOnPage(houseClean);
showOnPage('Is she currently at work:');
showOnPage(gfAtWork);
showOnPage('Time:');
showOnPage(time);

if (gfAtWork === true && houseClean === false) {
    let checkTime = `Let's see how much time I have.`
    showOnPage(checkTime)
        if (time < 6) {
            let startCleaning = true;
            showOnPage('I have some time, so start cleaning.')
        } else if (time >= 6) {
            let apologize = 'I will get it done, sorry.'
            showOnPage(apologize)
        } else {
            let makeUp = 'I will fix this tomorrow.'
            showOnPage(makeUp)
        };
} else {
    let doNothing = true;
    showOnPage('I can relax.')
};

showOnPage('<br></br>')

houseClean = false;
gfAtWork = true;
time = 6;

showOnPage('Is the house clean:');
showOnPage(houseClean);
showOnPage('Is she currently at work:');
showOnPage(gfAtWork);
showOnPage('Time:');
showOnPage(time);

if (gfAtWork === true && houseClean === false) {
    let checkTime = `Let's see how much time I have.`
    showOnPage(checkTime)
        if (time < 6) {
            let startCleaning = true;
            showOnPage('I have some time, so start cleaning.')
        } else if (time === 6) {
            let apologize = 'I will get it done, sorry.'
            showOnPage(apologize)
        } else {
            let makeUp = 'I will fix this tomorrow.'
            showOnPage(makeUp)
        };
} else {
    let doNothing = true;
    showOnPage('I can relax.')
};

showOnPage('<br></br>')

houseClean = false;
gfAtWork = true;
time = 7;

showOnPage('Is the house clean:');
showOnPage(houseClean);
showOnPage('Is she currently at work:');
showOnPage(gfAtWork);
showOnPage('Time:');
showOnPage(time);

if (gfAtWork === true && houseClean === false) {
    let checkTime = `Let's see how much time I have.`
    showOnPage(checkTime)
        if (time < 6) {
            let startCleaning = true;
            showOnPage('I have some time, so start cleaning.')
        } else if (time === 6) {
            let apologize = 'I will get it done, sorry.'
            showOnPage(apologize)
        } else {
            let makeUp = 'I will fix this tomorrow.'
            showOnPage(makeUp)
        };
} else {
    let doNothing = true;
    showOnPage('I can relax.')
};