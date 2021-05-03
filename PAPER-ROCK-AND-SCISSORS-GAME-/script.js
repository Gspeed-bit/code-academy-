const getUserChoice = (userInput) => {
    var userInput = prompt("Please enter your name",);
         
       userInput = userInput.toLowerCase();
       if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'|| userInput === 'bomb') {
           return userInput;
       } else {
           return 'error............';
       }
   }
   
   const getComputerChoice = () => {
       const randomNumber = Math.floor(Math.random()*3);
       switch (randomNumber) {
           case 0:
               return 'rock';
               case 1:
                   return 'paper';
                   case 2:
                       return 'scissors';
         default:
             return 'An error occured';
           }
   }  
   
   const determineWinner =(userChoice,computerChoice)=>{
       
   if (userChoice === computerChoice){
           return 'The game is a tie!';
       }
    if (userChoice === 'bomb'){
           return 'you won!';
       }
   if (userChoice === 'rock')
        if (computerChoice === 'paper'){
             return 'computer wins!';
           } else { 
               return 'you won!';
           } 
   if (userChoice === 'paper')
         if (computerChoice === 'scissors'){
               return 'computer wins!';
           } 
           else { 
               return 'you won!';
            } 
   if (userChoice === 'scissors')
        if (computerChoice === 'rock'){
               return 'computer wins!';
            } 
             else { 
                   return 'you won!';
           } 
   }
       
   
   const playGame = () => {
       const userChoice = getUserChoice();
       const computerChoice = getComputerChoice();
       console.log(`You threw: ' ${userChoice}`);
       console.log(`The computer threw: ' ${computerChoice}`);
       console.log(determineWinner(userChoice, computerChoice));
     };
   
     playGame();
   
   