const display = document.getElementById('display')
const buttons = document.querySelectorAll('button')

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = ''
        } else if (item.id == 'squareRoot') {
            display.innerText = Math.sqrt(display.innerText)
            if (display.innerText.length > 10) display.innerText = display.innerText.substring(0, 10)
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText)
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'EMPTY!!'
            setTimeout(() => display.innerText = '', 2000)
        } else if (item.id == 'percentage') {
            display.innerText = display.innerText * 0.01
        } else {
            display.innerText += item.id
        }
    }
})