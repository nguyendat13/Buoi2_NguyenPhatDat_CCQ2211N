const btnOan = document.getElementById('btnOan');
const btnTuTi = document.getElementById('btnTuTi');
const resultText = document.getElementById('result').querySelector('p');

const choices = ['Oẳn', 'Tù Tì']; // Possible choices

btnOan.addEventListener('click', playGame);
btnTuTi.addEventListener('click', playGame);

function playGame() {
  const userChoice = this.textContent; // Get user's choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Get computer's random choice

  const result = determineWinner(userChoice, computerChoice); // Determine winner
  resultText.textContent = `Bạn chọn: ${userChoice}, máy chọn: ${computerChoice}. Kết quả: ${result}`;
 
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Hòa';
  } else if ((userChoice === 'Oẳn' && computerChoice === 'Tù Tì') || (userChoice === 'Tù Tì' && computerChoice === 'Oẳn')) {
    return 'Bạn thắng!';
  } else {
    return 'Bạn thua!';
  }
}
