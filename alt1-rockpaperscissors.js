const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if (
		userInput === 'rock' ||
		userInput === 'paper' ||
		userInput === 'scissors' ||
		userInput === 'bomb'
	) {
		return userInput;
	} else {
		console.log('Error!');
	}
};

const getComputerChoice = () => {
	switch (Math.floor(Math.random() * 3)) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		return "Tie, well, that's cool!";
	}

	if (userChoice === 'rock' && computerChoice === 'scissors') {
		return 'You win!';
	}

	if (userChoice === 'paper' && computerChoice === 'rock') {
		return 'You win!';
	}

	if (userChoice === 'scissors' && computerChoice === 'paper') {
		return 'You win!';
	}

	if (userChoice === 'bomb') {
		return 'You win';
	}

	return 'You lose! OMG';
};

const playGame = () => {
	const userChoice = getUserChoice('paper');
	const computerChoice = getComputerChoice();
	console.log('You threw: ' + userChoice);
	console.log('The computer threw: ' + computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
};

playGame();
