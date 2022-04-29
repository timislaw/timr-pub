document.querySelector('#input').addEventListener('change', (e) => {
    if (e.target.value === 'true') {
        getTodos((error, todos) => {
            if (error) {
                console.log(error);
            } else {
                console.log(todos);
                renderTrue(todos);
            };
        });
    } else if (e.target.value === 'false') {
        getTodos((error, todos) => {
            if (error) {
                console.log(error);
            } else {
                console.log(todos);
                renderFalse(todos);
            };
        });

    };
});