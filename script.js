let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF"
tg.MaimButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

btn1.onclick = () => {
    if (tg.MainButton.IsVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Moscow -> Sankt-Peterburg")
        item = "Moscow -> Sankt-Peterburg"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.IsVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Rostov-On-Don -> Krasnodar")
        item = "Rostov-On-Don -> Krasnodar"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.IsVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: kislovodsk -> krasnodar")
        item = "kislovodsk -> krasnodar"
        tg.MainButton.show()
    }
}

btn4.onclick = () => {
    if (tg.MainButton.IsVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("You bought: Volgograd -> Volgodonsk")
        item = "Volgograd -> Volgodonsk"
        tg.MainButton.show()
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

tg.expand()