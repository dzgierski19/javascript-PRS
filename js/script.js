{    function playGame(playerInput) {

        clearMessages();

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
                printMessage ('Spróbuj jeszcze raz. Wpisz liczbę od 1 do 3')
                return 'Nie znam takiej cyfry';
            }
        }

        argComputerMove = getMoveName(randomNumber)

        printMessage('Mój ruch to ' + argComputerMove)

        //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')

        console.log('Gracz wpisał: ' + playerInput)

        argPlayerMove = getMoveName(playerInput)

        printMessage('Twój ruch to: ' + argPlayerMove)

        displayResult = function displayResult(argComputerMove, argPlayerMove){
            printMessage ('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove)
            
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                return 'Ty wygrywasz!';
            } 
            if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                return 'Ty wygrywasz!';
            } 
            if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                return 'Ty wygrywasz!';
            } 
            if (argComputerMove == argPlayerMove){
                return 'remis';
            } 
            if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                return 'Ty przegrywasz';
            } 
            if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                return 'Ty przegrywasz';
            } 
            if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                return 'Ty przegrywasz';
            } else {
                return 'Wpisz liczbę od 1 do 3'
            }
          
        } 
        
        printMessage('Wynik to ' + displayResult(argComputerMove, argPlayerMove));
    }    

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}