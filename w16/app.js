document.querySelector('#input').addEventListener('change', (e) => {
    if (e.target.value === 'true') {
        getTodos().then((todos) => {
            console.log(todos);
            renderTrue(todos);
        }).catch((error) => {
            console.log(error);
        });

    } else if (e.target.value === 'false') {
    getTodos().then((todos) => {
        console.log(todos);
        renderFalse(todos);
    }).catch((error) => {
        console.log(error);
    });
    };
});
