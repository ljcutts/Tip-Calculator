const leftSide = document.querySelector('.left-side')
const bill = document.getElementById('bill-input');
const customTip = document.getElementById('custom-tip');
const peopleContainer = document.querySelector('.people')
const numOfPeople = document.getElementById('people-input');
const tipNum = document.querySelector('.tip-num');
const totalNum = document.querySelector('.total-num');
const zeroAlert = document.querySelector('.zero-alert');
const resetContainer = document.querySelector('.reset-button-container');
const resetButton = document.querySelector('.reset-button');
const tipFive = document.getElementById('tip-5');
const tipTen = document.getElementById('tip-10');
const tipFifteen = document.getElementById('tip-15');
const tipTwentyFive = document.getElementById('tip-25');
const tipFifty = document.getElementById('tip-50');



//All Tip Buttons In Tip Container 
   tipFive.addEventListener('click', () => {
        var billValue = parseInt(bill.value);
        var peopleNum = parseInt(numOfPeople.value);
        if (billValue > 0 && peopleNum > 0) {
            var BillTip = (bill.value * (5 / 100)).toFixed(2);
            var Total = (billValue * (5 / 100) * peopleNum).toFixed(2);
            tipNum.innerHTML = `${BillTip}`;
            totalNum.innerHTML = `${Total}`;
            resetButton.style.opacity = '1';
        }
    })


    tipTen.addEventListener('click', () => {
        var billValue = parseInt(bill.value);
        var peopleNum = parseInt(numOfPeople.value);
        if (billValue > 0 && peopleNum > 0) {
            var BillTip = (bill.value * (10 / 100)).toFixed(2);
            var Total = (billValue * (10 / 100) * peopleNum).toFixed(2);
            tipNum.innerHTML = `${BillTip}`;
            totalNum.innerHTML = `${Total}`;
            resetButton.style.opacity = '1';
        }
    })


tipFifteen.addEventListener('click', () => {
    var billValue = parseInt(bill.value);
    var peopleNum = parseInt(numOfPeople.value);
    if (billValue > 0 && peopleNum > 0) {
        var BillTip = (bill.value * (15 / 100)).toFixed(2);
        var Total = (billValue * (15 / 100) * peopleNum).toFixed(2);
        tipNum.innerHTML = `${BillTip}`;
        totalNum.innerHTML = `${Total}`;
        resetButton.style.opacity = '1';
    }
})

tipTwentyFive.addEventListener('click', () => {
    var billValue = parseInt(bill.value);
    var peopleNum = parseInt(numOfPeople.value);
    if (billValue > 0 && peopleNum > 0) {
        var BillTip = (bill.value * (25 / 100)).toFixed(2);
        var Total = (billValue * (25 / 100) * peopleNum).toFixed(2);
        tipNum.innerHTML = `${BillTip}`;
        totalNum.innerHTML = `${Total}`;
        resetButton.style.opacity = '1';
    }
})

tipFifty.addEventListener('click', () => {
    var billValue = parseInt(bill.value);
    var peopleNum = parseInt(numOfPeople.value);
    if (billValue > 0 && peopleNum > 0) {
        var BillTip = (bill.value * (50 / 100)).toFixed(2);
        var Total = (billValue * (50 / 100) * peopleNum).toFixed(2);
        tipNum.innerHTML = `${BillTip}`;
        totalNum.innerHTML = `${Total}`;
        resetButton.style.opacity = '1';
    }
})

//Event Listener For Input Boxes On Left Side
leftSide.addEventListener('input', () => {
    var billValue = parseInt(bill.value);
    var customTipper = parseInt(customTip.value);
    var peopleNum = parseInt(numOfPeople.value);
    var billTip = (billValue * (customTipper/100)).toFixed(2)
    var totalAmount = (billValue * (customTipper / 100) * peopleNum).toFixed(2);
    if (billValue < 0) {
        alert('Cannot be below or at 0');
        bill.value = 0;
        tipNum.innerHTML = '0.00';
        totalNum.innerHTML = '0.00';
        resetButton.style.opacity = '0.3';
    }
    if (customTipper < 0) {
        alert('Cannot be below or at 0');
        tipNum.innerHTML = '0.00';
        totalNum.innerHTML = '0.00';
        customTip.value = 0;
        resetButton.style.opacity = '0.3';
    }

    if(billValue > 0 && customTipper > 0 && peopleNum > 0){
        tipNum.innerHTML = `${billTip}`;
        totalNum.innerHTML = `${totalAmount}`;
        resetButton.style.opacity = '1';
    } 

})

//Functionality For If User Has 0 People In Input
peopleContainer.addEventListener('input', () => {
    var peopleNum = parseInt(numOfPeople.value);
    if (peopleNum < 0 || peopleNum === 0) {
        numOfPeople.value = 0;
        zeroAlert.style.color = 'red';
        numOfPeople.style.border = 'solid red';
    } else {
        zeroAlert.style.color = 'transparent';
        numOfPeople.style.border = 'none';
    }
})


//Functionality For Reset Button
resetContainer.addEventListener('click', () => { 
        resetButton.style.opacity = '0.3';
        bill.value = 0;
        customTip.value = 0;
        numOfPeople.value = 0;
        tipNum.innerHTML = '0.00';
        totalNum.innerHTML = '0.00';
})