// ------------selected part----------

let playersNameArray = [];


//  -----------for display function----------

function display(playersName) {
    let orderList = document.getElementById('players-list');
    orderList.innerText = '';
    if (playersName.length <= 5) {
        for (let i = 0; i < playersName.length; i++) {
            let name = playersNameArray[i];
            let li = document.createElement('li');
            li.innerText = name;
            orderList.appendChild(li);
        }
    }
    else {
        alert('You cannot  selected more then five players !!');
        return;
    }

}
//  ----------disabled button function-----------
function disabled(names) {
    names.style.backgroundColor = 'gray';
    names.disabled = true;
    return;
}

// ---------main function-------------

function playersName(names) {

    let players = names.parentNode.children[0].innerText;


    let player = [players];
    playersNameArray.push(player);

    display(playersNameArray);
    document.getElementById('select-number').innerText = playersNameArray.length;
    disabled(names)



}


// ------------calculatiom part start ------------------

function inputAmoutFeild(id) {
    let inputFeild = document.getElementById(id);
    let inputFeildString = inputFeild.value;
    let inputAmount = parseInt(inputFeildString);
    return inputAmount

}

function perPlayerTotalAmount() {
    let perPlayer = inputAmoutFeild('per-player-feild');
    if (playersNameArray.length > 5) {
        playersNameArray.length = 5
        return;
    }
    let totalAmount = playersNameArray.length * perPlayer;
    return totalAmount;

}

//  ---------------frist calculate button---------------

document.getElementById('frist-calculate-btn').addEventListener('click', function () {
    let totalAmount = perPlayerTotalAmount();
    if (isNaN(totalAmount)) {
        alert('Please insart a valid number')
    }
    let totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = totalAmount;
    return totalAmount;


})


//  ---------------second calculate button---------------

document.getElementById('last-calculate-btn').addEventListener('click', function () {
    let totalAmount = perPlayerTotalAmount();
    let managerAmount = inputAmoutFeild('manager-feild');
    let coachAmount = inputAmoutFeild('coach-feild');


    //------------- alert -------------

    if (isNaN(managerAmount) || isNaN(coachAmount)) {
        alert('Please insart a valid number')
    }

    // -------------final calculation------------

    let finalTotalAmount = totalAmount + managerAmount + coachAmount;

    let finalAmount = document.getElementById('final-amount');

    finalAmount.innerText = finalTotalAmount;

})


