let numSquare = 6;
let colors = [];
let pickedColor;

let colorDisplay = document.getElementById('colorDisplay');
var square = document.querySelectorAll('.square');
const message = document.querySelector('#message');
const h1 = document.querySelector('h1');
const btnReset = document.querySelector('.btnReset');
const modeButton = document.querySelectorAll('.mode');

defaultfunction();

function defaultfunction(){
    //setup mode button
    setupmodeButton();
    setupSquare();
    reset();
}

function setupmodeButton(){
    for(let i = 0 ; i<modeButton.length ; i++){
        modeButton[i].addEventListener('click', function(){
            modeButton[0].classList.remove('selected');
            modeButton[1].classList.remove('selected');
            this.classList.add('selected');
            if(this.textContent === 'Easy'){
                numSquare= 3;
            }else {
                numSquare = 6;
            }
            reset();
        });
    }
}

function setupSquare() {
    for (let i =0; i<square.length; i++){
        // click event
        square[i].addEventListener('click', function(){
            const clickedColor = this.style.backgroundColor;
            // run this if clicked color equal to pickedColor
            if(clickedColor === pickedColor){
                message.textContent = 'Correct!';
                btnReset.textContent = 'Play Again?';
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{ // run this if clicked color isn't equal to pickedColor
                square[i].style.backgroundColor='#232323';
                message.textContent = 'Try Again!';
            }
        });
    }
}

function reset (){
    colors = generateRandomColor(numSquare);
    pickedColor = randomNumber();
    colorDisplay.textContent = pickedColor;
    message.textContent = '';
    btnReset.textContent = "New Colors";
    h1.style.backgroundColor = 'steelblue';
    for (let i = 0; i < square.length; i++){
        if(colors[i]){
        square[i].style.display='block';
        square[i].style.backgroundColor= colors[i];
        }else{
            square[i].style.display='none';
        }
    }
}


btnReset.addEventListener('click', function(){
 reset();
});



//change Background Color
function changeColor (color){
    for(let i = 0; i<square.length; i++){
    square[i].style.backgroundColor = color;
    }
}
// get random number to pickedColor
function randomNumber(){
    let random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColor (num){
    //add array
    let array =[];
    //loop and add push randomColor to array
    for (let i = 0 ; i<num ;i++){
    array.push(randomColor());
    }
    //return array
    return array;

}

function randomColor (){
    //r 0-255
    let r = Math.floor(Math.random()*256);
    //g 0-255
    let g = Math.floor(Math.random()*256);
    //b 0-255
    let b = Math.floor(Math.random()*256);
    // rgb(0, 0, 0)
    return 'rgb' + '(' + r + ', ' + g + ', ' + b + ')';
}