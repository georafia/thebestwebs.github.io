let tg = window.Telegram.WebApp;

tg.expand()

let btn = document.querySelector('#click')

btn.onclick = () => {
    if (tg.MainButton.IsVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("rahh")
        tg.MainButton.show()
    }
}