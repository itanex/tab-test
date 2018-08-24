
    let items = document.querySelectorAll('li');
    let id = 0;

    items.forEach((value, key, parent) => {
        value.addEventListener('focus', () => {
            let child = document.createElement('span');

            child.innerText = ` -- ${id++}`;

            value.style.backgroundColor = '#F00';
            value.appendChild(child);
        })
    });

    let btn = document.getElementById('move');

    btn.addEventListener('click', () => {

        items[0].focus();

    });