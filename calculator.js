<<<<<<< HEAD
let display = document.getElementById('curr-display');
let prevdisplay = document.getElementById('prev-display');
=======
let display = document.getElementById('display');

>>>>>>> 3d914f0bb3575301d37463528de80e5f19e35ecb
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText){
<<<<<<< HEAD
        case 'AC':
            display.innerText = '';
            prevdisplay.innerText = '';
            break;
        case 'DEL':
=======
        case 'C':
            display.innerText = '';
            break;
        case '←':
>>>>>>> 3d914f0bb3575301d37463528de80e5f19e35ecb
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
<<<<<<< HEAD
=======
                
>>>>>>> 3d914f0bb3575301d37463528de80e5f19e35ecb
            }
            break;      
        default:
       display.innerText += e.target.innerText;
<<<<<<< HEAD
       prevdisplay.innerText = display.innerText;
=======
>>>>>>> 3d914f0bb3575301d37463528de80e5f19e35ecb
       }
    })
}); 
