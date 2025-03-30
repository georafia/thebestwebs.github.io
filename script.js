let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MaimButton.color = "#2cab37"

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')
let btn4 = document.querySelector('#btn4')

let price = 0
let name = ""
let phone = ""
let e-mail = ""

let items = {
    Moscow -> Sankt-Peterburg: 0,
    Rostov-On-Don -> Krasnodar: 0,
    kislovodsk -> krasnodar: 0,
    Volgograd -> Volgodonsk: 0
}

let usercard = document.querySelector('#usercard')
let username = document.querySelector('#user-name')
let useremail = document.querySelector('#user-email')
let userphone = document.querySelector('#user-phone')

function create_li(text) {
    let li = document.createElement("li")
    li.innerHTML = Text
    usercard.appendChild(li)
}

btn1.onclick = () => {
    items['Moscow -> Sankt-Peterburg'] += 1
    price += 19
    update_orders()
}

btn2.onclick = () => {
    items['Rostov-On-Don -> Krasnodar'] += 1
    price += 12
    update_orders()
}

btn3.onclick = () => {
    items['kislovodsk -> krasnodar'] += 1
    price += 21
    update_orders()
}

btn4.onclick = () => {
    items['Volgograd -> Volgodonsk'] += 1
    price += 11
    update_orders()
}

let submit = document.querySelector("#submit")

submit.onclick = () => {
    tg.MainButton.setText("Press the button to confirm the order")
    tg.MainButton.show()
}

function update_orders() {
    usercard.innerHTML = "Your orders: "
    if (name != "") {
        create_li("Name - " + name)
    }
    if (email != "") {
        create_li("Email - " + email)
    }
    if (phone != "") {
        create_li("Phone number - " + phone)
    }
    for (let item in items) {
        if (items[item] != 0) {
            let li = document.createElement("li")
            li.innerHTML = item + ": " + items[item]
            usercard.appendChild(li)
        }
    }
}

username.onchange() = () => {
    name = username.value
}

useremail.onchange() = () => {
    name = useremail.value
}

userphone.onchange() = () => {
    name = userphone.value
}

Telegram.WedApp.onEvent("mainButtonClicked", function() {
    result = ""
    if (name != "") {
        create_li("Name - " + name)
    }
    if (email != "") {
        create_li("Email - " + email)
    }
    if (phone != "") {
        create_li("Phone number - " + phone)
    }

    result += "Your orders: \n"
    for (let item in items) {
        if (items[item] != 0) {
            result += item + " : " + items[item] + "\n"
        }
    }
    result += "\n\n Total price: " + price + "$"
    tg.sendData(result)
})