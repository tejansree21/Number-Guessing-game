const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        alert('Please enter a valid number between 1 and 10.');
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('result').style.color = 'green';
        document.getElementById('submitGuess').disabled = true;
    } else {
        const hint = userGuess < randomNumber ? 'higher' : 'lower';
        document.getElementById('result').innerText = `Try again! Guess ${hint}.`;
        document.getElementById('result').style.color = 'red';
    }
});
