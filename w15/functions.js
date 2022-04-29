const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status ===200) {
        const data = JSON.parse(e.target.responseText);
        callback(undefined, data);
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data', undefined);
        };
    });



    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
};

const renderFalse = (falsey) => {

    document.querySelector('#output').innerHTML = '';
    falsey.forEach((falsey) => {
        if (falsey.completed === false) {
        const p = document.createElement('p');
        p.textContent = falsey.title;
        document.querySelector('#output').appendChild(p);
    };
        });
};


const renderTrue = (truthy) => {
    document.querySelector('#output').innerHTML = '';

    truthy.forEach((truthy) => {
    if (truthy.completed === true) {
    const p = document.createElement('p');
    p.textContent = truthy.title;
    document.querySelector('#output').appendChild(p);
};
    });
};