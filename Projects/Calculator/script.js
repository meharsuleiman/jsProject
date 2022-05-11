const buttons = document.querySelectorAll('.btn');
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            string = eval(string)
            document.querySelector('.input').value = string;
        } else if (event.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.input').value = string;
        } else if (event.target.innerHTML == 'X') {
            string = string.slice(0, string.length - 1);
            document.querySelector('.input').value = string;
        }
        else {
            string += event.target.innerHTML;
            document.querySelector('.input').value = string;
        }
    })
})