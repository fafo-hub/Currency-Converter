const inserted = document.getElementById('submit');
inserted.addEventListener('click', function(event) {
    let x = document.getElementById('main-input').value
    if (x <= 1) {
        alert ("Value must not be less than 1")
    }
    else {
        let dollarValue = document.getElementById('Dollar');
        dollarValue.innerHTML = x / 387.01
        let EuroValue = document.getElementById('Euro');
        EuroValue.innerHTML =  x / 422.5197
        let YuanValue = document.getElementById('Yuan');
        YuanValue.innerHTML = x / 54.17
    }
})