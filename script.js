function computerPlay() {
    // Function to generate random numbers within a range, which for this script will be 1-3.
    const randomNumbers = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
    }

    // Generate a random number between 10 and 40

    const choice = randomNumbers(10,40);

    // Associate the random number choice with a r/p/s value
    // Divide num between 10 and 40 by 10 and rounding down gives us a number between 1 and 3
    // I found that if I only used random numbers between 1 and 3, Paper was 2x as likely as Rock or Scissors
    // Using a larger number range allowed for more randomness

    switch (Math.floor(choice/10)) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }


}

function playRound(playerSelection, computerSelection) {
    // Set inputs to lowercase to make answers case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // Determine who wins with series of if statements
    // Go through various computer selection scenarios
    // for each player selection
    if (playerSelection === 'rock') { 
        if (computerSelection === 'paper') { 
            return 'You lose! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You win! Rock beats Scissors';
        } else if (computerSelection === 'rock') {
            return 'Tie between Rock and Rock!'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') { 
            return 'Tie between Paper and Paper!';
        } else if (computerSelection === 'scissors') {
            return 'You lose! Scissors beats Paper';
        } else if (computerSelection === 'rock') {
            return 'You win! Paper beats Rock'
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') { 
            return 'You win! Scissors beats Paper';
        } else if (computerSelection === 'scissors') {
            return 'Tie between Scissors and Scissors!';
        } else if (computerSelection === 'rock') {
            return 'You lose! Rock beats Scissors'
        }
    }
    // Return the winner in a string
}

function testPlay() {
    let x = 0;
    let rock = 0;
    let paper = 0
    let scissors = 0;
    while (x < 100) {
        switch (computerPlay()) {
            case 'Rock':
                rock++;
                x++;
                break
            case 'Paper':
                paper++;
                x++;
                break;
            case 'Scissors':
                scissors++;
                x++;
                break;
        }
    }
    console.log(`Rock: ${rock}`);
    console.log(`Paper: ${paper}`);
    console.log(`Scissors: ${scissors}`);
}