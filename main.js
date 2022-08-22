const playerList = [];


function selectsPlayers(name) {
    const container = document.getElementById('area');
    const li = document.createElement('li');

    if (playerList.length < 5) {
        li.innerText = name;
        container.appendChild(li);
        playerList.push(name);

    } else {
        alert('5 Players already selected!')
    }
}

function buttonWork(selectionButton) {
    if (playerList.length < 5) {
        selectionButton.style.background = 'gray';
        selectionButton.disabled = true;
    }
}

document.getElementById('cr-btn').addEventListener('click', function () {
    const player = document.getElementById('player1');
    const playersName = player.innerText;
    const button = document.getElementById('cr-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('messi-btn').addEventListener('click', function () {
    const player = document.getElementById('player2');
    const playersName = player.innerText;
    const button = document.getElementById('messi-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('salah-btn').addEventListener('click', function () {
    const player = document.getElementById('player3');
    const playersName = player.innerText;
    const button = document.getElementById('salah-btn');

    buttonWork(button);
    selectsPlayers(playersName);


})

document.getElementById('neymar-btn').addEventListener('click', function () {
    const player = document.getElementById('player4');
    const playersName = player.innerText;
    const button = document.getElementById('neymar-btn');

    buttonWork(button);
    selectsPlayers(playersName);


})

document.getElementById('mbappe-btn').addEventListener('click', function () {
    const player = document.getElementById('player5');
    const playersName = player.innerText;
    const button = document.getElementById('mbappe-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('karim-btn').addEventListener('click', function () {
    const player = document.getElementById('player6');
    const playersName = player.innerText;
    const button = document.getElementById('karim-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('oscar-btn').addEventListener('click', function () {
    const player = document.getElementById('player7');
    const playersName = player.innerText;
    const button = document.getElementById('oscar-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('harry-btn').addEventListener('click', function () {
    const player = document.getElementById('player8');
    const playersName = player.innerText;
    const button = document.getElementById('harry-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('ozil-btn').addEventListener('click', function () {
    const player = document.getElementById('player9');
    const playersName = player.innerText;
    const button = document.getElementById('ozil-btn');

    buttonWork(button);
    selectsPlayers(playersName);

})

document.getElementById('calculate-btn').addEventListener('click', function () {

    const players = playerList.length;
    if (players != 0) {
        const perPlayerField = document.getElementById('perPlayer-amount');
        const perPlayerCost = perPlayerField.value;
        const perPlayerCostFloat = parseFloat(perPlayerCost);
        if (isNaN(perPlayerCostFloat)) {
            alert('Please Insert Per-Player Cost!!');
        } else {
            const expAmount = players * perPlayerCostFloat;
            const expence = document.getElementById('player-exp');
            expence.innerText = expAmount;
        }
    } else {
        alert('Please Select Players!');
    }
})



document.getElementById('total-btn').addEventListener('click', function () {
    const expence = document.getElementById('player-exp');
    const expenceValue = expence.innerText;
    const expenceValueFloat = parseFloat(expenceValue);

    if (expenceValueFloat != '') {
        const managerFeeField = document.getElementById('manager-fee');
        const managerFee = managerFeeField.value;
        const managerFeeFloat = parseFloat(managerFee);

        const coachFeeField = document.getElementById('coach-fee');
        const coachFee = coachFeeField.value;
        const coachFeeFloat = parseFloat(coachFee);

        if (managerFee != '' && coachFee != '') {
            const grandTotal = expenceValueFloat + managerFeeFloat + coachFeeFloat;
            const grandTotalField = document.getElementById('g-total');
            grandTotalField.innerText = grandTotal;
        } else {
            alert('One or More Fields are empty!!')
        }
    } else {
        alert("Player's Information Blank!!")
    }

})