const Randomnum=(parseInt(Math.random()*100+1))

const submitButton=document.getElementById('subt')
const userInput=document.getElementById('guess')
const guesses=document.querySelector('.guessField')
const lastResult=document.querySelector('.lastResult')
const LowOrHi=document.querySelector('.LowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')
const prevGuess=[]
let numGuess=1;

let playGame=true;

if(playGame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        
        validateGuess(guess)
    })
}

function validateGuess(Guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1 || guess>100){
        alert('please enter a number between 1 and 100')

    }else{
        prevGuess.push(guess)
        if(guess===11){
            dislpyeGuess(guess)
            displyeMassage(`Game over: ramdom number ${Randomnum}`)
            endGame(guess)
        }else{
            dislpyeGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess===Randomnum){
        displyeMassage(`you guess right`)
        endGame()

    }else if(guess<Randomnum){
        displyeMassage('Number is TOOO low')
    }
    
    else if(guess>Randomnum){
        displyeMassage('Number is TOOO High')
    }
}

function dislpyeGuess(guess){
    userInput.value=''
    guesses.innerHTML+=`${guess} ,`; 
    numGuess++
   lastResult.innerHTML=`${11-numGuess}`

}

function displyeMassage(massage){
    //
}

function newGame(){

}

function endGame(){
    //
}