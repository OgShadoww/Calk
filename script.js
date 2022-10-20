let a = ''
let b = ''
let sing = ''
let finish = false

let digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

let actions = ['-', '+', 'X', '/', '+/-']

let out = document.querySelector('.output p')

let clearAll = document.querySelector('.ac')

clearAll.addEventListener('click', () => {
    a = ''
    b = ''
    sing = ''
    finish = false
    out.textContent = '0'
})

let buttons = document.querySelector('.buttons')

buttons.addEventListener('click', e => {
    if(!e.target.classList.contains('btn')) return;

    if(e.target.classList.contains('ac')) return;

    out.textContent = '0'

    let key = e.target.textContent

    if(digit.includes(key)) {
       if(b === '' && sing == '') {
            a+= key;
            out.textContent = a
       }
       else if(a !== '' && b !== '' && finish) {
        b = key;
        finish = false;
        out.textContent = b;
       }
       else {
        b += key
        out.textContent = b;
       }
       return
    }
    if(actions.includes(key)) {
        sing = key
        out.textContent = sing

        if(sing === '+/-') {
            out.textContent = 'soon'
        }
    }
    if(key === '=') {
        if(b === '') b = a;
        switch(sing) {
            case "+":
                a = (+a) + (+b)
                break;
            case "-":
                a = a - b
                break;
            case "X":
                a = a * b
                break;
            case "/":
                if(b === '0') {
                    out.textContent = "Помилка"
                    a = ''
                    b = ''
                    sing = ''
                    return
                }
                a = a / b
                break;
        }
        out.textContent = a
        finish = true
    }
}) 