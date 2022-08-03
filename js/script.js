let randomNumber = Math.floor(Math.random() *3 + 1)

console.log('Wylosowana liczba to: ' + randomNumber)

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if (argMoveId == 2){
        return 'papier';
    }else if (argMoveId == 3){
        return 'nożyce';
    }else {
        printMessage ('Spróbuj jeszcze raz. Wpisz liczbę od 1 do 3');
    }
}

argComputerMove = getMoveName(randomNumber)

printMessage('Mój ruch to ' + argComputerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')

console.log('Gracz wpisał: ' + playerInput)

argPlayerMove = getMoveName(playerInput)

printMessage('Twój ruch to: ' + argPlayerMove)

displayResult = function displayResult(argComputerMove, argPlayerMove){
    printMessage ('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove)
    
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
        printMessage('remis');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Ty przegrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Ty przegrywasz');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Ty przegrywasz');
    } else {
        printMessage('Wpisz liczbę od 1 do 3');
    }
}

printMessage('Wynik to ' + displayResult(argComputerMove, argPlayerMove))