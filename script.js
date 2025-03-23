let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF"
tg.MaimButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

let  name = ""
let phone = ""
let e-mail = ""

let items = {
    Moscow -> Sankt-Peterburg: 0,
    Rostov-On-Don -> Krasnodar: 0,
    kislovodsk -> krasnodar: 0,
    Volgograd -> Volgodonsk: 0
}

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Moscow -> Sankt-Peterburg")
        item = "Moscow -> Sankt-Peterburg"
        items['Moscow -> Sankt-Peterburg'] += 1
        update_orders()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Rostov-On-Don -> Krasnodar")
        item = "Rostov-On-Don -> Krasnodar"
        items['Rostov-On-Don -> Krasnodar'] += 1
        update_orders()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: kislovodsk -> krasnodar")
        item = "kislovodsk -> krasnodar"
        items['kislovodsk -> krasnodar'] += 1
        update_orders()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Volgograd -> Volgodonsk")
        item = "Volgograd -> Volgodonsk"
        items['Volgograd -> Volgodonsk'] += 1
        update_orders()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

function update_orders() {
    usercard.innerHTML = "Your orders: "
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}

tg.expand()