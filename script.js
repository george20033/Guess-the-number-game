'use strict';
var secretNumber = Math.floor(Math.random(20) * 20 + 1);
var score = 20;
var highScore = 0;
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  //when there is no input

  if (!guess) {
    messageSelector('No Number!⛔');
    //when the players wins
  } else if (guess === secretNumber) {
    messageSelector('correct answer!🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem ';
    document.querySelector('.number').textContent = '?';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageSelector(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      messageSelector('😓 YOU LOST');
    }
  }
  //   else if (guess > secretNumber) {
  //     //when the guess is too high
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😓 YOU LOST';
  //     }
  //   } else if (guess < secretNumber) {
  //     //when the guess is too low

  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😓 YOU LOST';
  //     }
  //   }
});

//again btn
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.floor(Math.random(20) * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
});
function messageSelector(message) {
  document.querySelector('.message').textContent = message;
}
