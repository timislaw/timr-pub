const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');

    if (response.status === 200) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Unable to fetch data');
    }
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
