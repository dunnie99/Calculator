let display = document.getElementById('curr-display');
let prevdisplay = document.getElementById('prev-display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText){
        case 'AC':
            display.innerText = '';
            prevdisplay.innerText = '';
            break;
        case 'DEL':
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
            break; 
        case '=':
            try {
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = 'SyntaxError';
                break;
            }
            break;      
        default:
       display.innerText += e.target.innerText;
       prevdisplay.innerText = display.innerText;
       }
    })
}); 
