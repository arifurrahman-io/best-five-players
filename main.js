const playerList = [];

document.getElementById('cr-btn').addEventListener('click', function () {
    const playersName = 'Cristiano Ronaldo';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }

})

document.getElementById('messi-btn').addEventListener('click', function () {
    const playersName = 'Lionel Messi';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }
})

document.getElementById('salah-btn').addEventListener('click', function () {
    const playersName = 'Mohammad Salah';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }
})

document.getElementById('neymar-btn').addEventListener('click', function () {
    const playersName = 'Neymar Jr.';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }
})

document.getElementById('mbappe-btn').addEventListener('click', function () {
    const playersName = 'Kylian Mbappe';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }
})

document.getElementById('karim-btn').addEventListener('click', function () {
    const playersName = 'Karim Benzema';
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = playersName;
        container.appendChild(li);
        playerList.push(playersName);
        this.style.background = 'gray';
        this.disabled = true;
    } else {
        alert('5 Players already selected!')
    }
})
