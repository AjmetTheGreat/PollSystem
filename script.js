let votes = {option1: 0, option2: 0};
const maxVotes = 50; // Set the number of votes needed to fill a box

function setOptions(label1, label2, max) {
    document.getElementById('label1').innerText = label1;
    document.getElementById('label2').innerText = label2;
    maxVotes = max;
}

function vote(option) {
    if (option === 'option1') {
        votes.option1++;
    } else if (option === 'option2') {
        votes.option2++;
    }
    updateBoxes();
    checkWinner();
}

function updateBoxes() {
    const box1Fill = document.getElementById('box1-fill');
    const box2Fill = document.getElementById('box2-fill');

    const option1Percentage = (votes.option1 / maxVotes) * 100;
    const option2Percentage = (votes.option2 / maxVotes) * 100;

    box1Fill.style.height = option1Percentage + '%';
    box2Fill.style.height = option2Percentage + '%';
}

function checkWinner() {
    if (votes.option1 >= maxVotes) {
        alert('Option 1 Wins!');
        resetVotes();
    } else if (votes.option2 >= maxVotes) {
        alert('Option 2 Wins!');
        resetVotes();
    }
}

function resetVotes() {
    votes.option1 = 0;
    votes.option2 = 0;
    updateBoxes();
}

// Example initialization
setOptions("Go to the Park", "Visit the Museum", 50);