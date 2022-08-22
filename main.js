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


document.getElementById('calculate-btn').addEventListener('click', function () {
    const players = playerList.length;
    const perPlayerField = document.getElementById('perPlayer-amount');
    const perPlayerCost = perPlayerField.value;
    const perPlayerCostFloat = parseFloat(perPlayerCost);

    const expAmount = players * perPlayerCostFloat;

    const expence = document.getElementById('player-exp');
    expence.innerText = expAmount;

})



document.getElementById('total-btn').addEventListener('click', function () {
    const expence = document.getElementById('player-exp');
    const expenceValue = expence.innerText;
    const expenceValueFloat = parseFloat(expenceValue);

    const managerFeeField = document.getElementById('manager-fee');
    const managerFee = managerFeeField.value;
    const managerFeeFloat = parseFloat(managerFee);

    const coachFeeField = document.getElementById('coach-fee');
    const coachFee = coachFeeField.value;
    const coachFeeFloat = parseFloat(coachFee);

    const grandTotal = expenceValueFloat + managerFeeFloat + coachFeeFloat;

    const grandTotalField = document.getElementById('g-total');

    grandTotalField.innerText = grandTotal;

})