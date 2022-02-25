
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

// let timeOfDay = function randomTime(min = 1, max = 7) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let cleanDay = function cleanTime(tidy = false) {
//     let time = timeOfDay();
//     showOnPage(time);
//     if (tidy) {
//         showOnPage('Relax');
//     } else if (time > 6) {
//         showOnPage('Apologize');
//     } else {
//         showOnPage('Clean Up');
//     };
//     return '';
// };

// const cleanDay = {
//     sheWork: Math.random() < 0.5,
//     timeOff: 6,
//     isClean: Math.random() < 0.5,
//     currentTime: function () {
//         const min = 1;
//         const max = 5;
//         let time = Math.floor(Math.random() * (max - min + 1)) + min;

//         return time;
//     }

// };

// let decision = function (clean) {
//    if (clean.sheWork === true && clean.isClean === false) {
//        return `${clean.currentTime()} O'clock leaves me plenty of time to clean. She's off at ${clean.timeOff}.`;
//    } else if (clean.sheWork === false && clean.isClean === false) {
//        return `I'm sorry, I'll get it done ASAP.`;
//    } else {
//        return `Place is clean, no worries.`
//    };
// };

// showOnPage(decision(cleanDay));


// let decision = function (clean) {
//    if (clean.work === true && clean.isClean === false) {
//        showOnPage(`${clean.currentTime()} O'clock leaves me plenty of time to clean. She's off at ${clean.timeOff}.`);
//    } else if (clean.work === false && clean.isClean === false) {
//        showOnPage(`I'm sorry, I'll get it done ASAP.`);
//    } else {
//        showOnPage(`Place is clean, no worries.`);
//    };
// };
