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