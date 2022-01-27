const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
};

// let houseClean = false;

// let gfAtWork = true;

// let time = 4;

// showOnPage('Is the house clean:');
// showOnPage(houseClean);
// showOnPage('Is she currently at work:');
// showOnPage(gfAtWork);
// showOnPage('Time:');
// showOnPage(time);

// if (gfAtWork === true && houseClean === false) {
//     let checkTime = `Let's see how much time I have.`
//     showOnPage(checkTime)
//         if (time < 6) {
//             let startCleaning = true;
//             showOnPage('I have some time, so start cleaning.')
//         } else if (time >= 6) {
//             let apologize = 'I will get it done, sorry.'
//             showOnPage(apologize)
//         } else {
//             let makeUp = 'I will fix this tomorrow.'
//             showOnPage(makeUp)
//         };
// } else {
//     let doNothing = true;
//     showOnPage('I can relax.')
// };

// showOnPage('<br></br>')

// houseClean = true;
// gfAtWork = true;
// time = 5;

// showOnPage('Is the house clean:');
// showOnPage(houseClean);
// showOnPage('Is she currently at work:');
// showOnPage(gfAtWork);
// showOnPage('Time:');
// showOnPage(time);

// if (gfAtWork === true && houseClean === false) {
//     let checkTime = `Let's see how much time I have.`
//     showOnPage(checkTime)
//         if (time < 6) {
//             let startCleaning = true;
//             showOnPage('I have some time, so start cleaning.')
//         } else if (time >= 6) {
//             let apologize = 'I will get it done, sorry.'
//             showOnPage(apologize)
//         } else {
//             let makeUp = 'I will fix this tomorrow.'
//             showOnPage(makeUp)
//         };
// } else {
//     let doNothing = true;
//     showOnPage('I can relax.')
// };

// showOnPage('<br></br>')

// houseClean = false;
// gfAtWork = true;
// time = 6;

// showOnPage('Is the house clean:');
// showOnPage(houseClean);
// showOnPage('Is she currently at work:');
// showOnPage(gfAtWork);
// showOnPage('Time:');
// showOnPage(time);

// if (gfAtWork === true && houseClean === false) {
//     let checkTime = `Let's see how much time I have.`
//     showOnPage(checkTime)
//         if (time < 6) {
//             let startCleaning = true;
//             showOnPage('I have some time, so start cleaning.')
//         } else if (time === 6) {
//             let apologize = 'I will get it done, sorry.'
//             showOnPage(apologize)
//         } else {
//             let makeUp = 'I will fix this tomorrow.'
//             showOnPage(makeUp)
//         };
// } else {
//     let doNothing = true;
//     showOnPage('I can relax.')
// };

// showOnPage('<br></br>')

// houseClean = false;
// gfAtWork = true;
// time = 7;

// showOnPage('Is the house clean:');
// showOnPage(houseClean);
// showOnPage('Is she currently at work:');
// showOnPage(gfAtWork);
// showOnPage('Time:');
// showOnPage(time);

// if (gfAtWork === true && houseClean === false) {
//     let checkTime = `Let's see how much time I have.`
//     showOnPage(checkTime)
//         if (time < 6) {
//             let startCleaning = true;
//             showOnPage('I have some time, so start cleaning.')
//         } else if (time === 6) {
//             let apologize = 'I will get it done, sorry.'
//             showOnPage(apologize)
//         } else {
//             let makeUp = 'I will fix this tomorrow.'
//             showOnPage(makeUp)
//         };
// } else {
//     let doNothing = true;
//     showOnPage('I can relax.')
// };

// let checkTime = function (time = 5, busy = false) {
//     if (busy) {
//         showOnPage('Keep Working');
//     } else {
//         showOnPage (`Looks like it is ${time} o'clock`);
//     };

//     return time;
//         // if (time <= 6 && busy === false) {
//         //     showOnPage('I wonder if house is tidy');
//         // };
// };

// showOnPage();


// let cleanTime = function (tidy = false, work = true) {
//     if (tidy && work) {
//         showOnPage('No worries, I get to relax.');
//     } else if (tidy === false && work === true) {
//         showOnPage('Time to clean');
//     } else {
//         showOnPage('Apologize, and begin cleaning')
//     };
// };

// checkTime();

// cleanTime();

// showOnPage('<br>');

// checkTime(7, false);

// cleanTime(false, false);

// showOnPage('<br>');

// checkTime(4, true);

// cleanTime(false, true);

// showOnPage('<br>');

// checkTime(7, true);

// cleanTime(true, true);


let timeOfDay = function randomTime(min = 1, max = 7) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let cleanDay = function cleanTime(tidy = false) {
    let time = timeOfDay();
    showOnPage(time);
    if (tidy) {
        showOnPage('Relax');
    } else if (time > 6) {
        showOnPage('Apologize');
    } else {
        showOnPage('Clean Up');
    };
    return '';
};



showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());
showOnPage(cleanDay());

