const animals = [
  {
    name: "alpaca",
    pic: "pictures/alpaca.jpeg",
    audio: "sounds/alpaca.mp3",
  },
  {
    name: "cat",
    pic: "pictures/cat.jpeg",
    audio: "sounds/cat.mp3",
  },
  {
    name: "cow",
    pic: "pictures/cow.jpeg",
    audio: "sounds/cow.mp3",
  },
  {
    name: "dog",
    pic: "pictures/dog.jpeg",
    audio: "sounds/dog.mp3",
  },
  {
    name: "donkey",
    pic: "pictures/donkey.jpeg",
    audio: "sounds/donkey.mp3",
  },
  {
    name: "duck",
    pic: "pictures/duck.jpeg",
    audio: "sounds/duck.mp3",
  },
  {
    name: "elephant",
    pic: "pictures/elephant.jpeg",
    audio: "sounds/elephant.mp3",
  },
  {
    name: "frog",
    pic: "pictures/frog.jpeg",
    audio: "sounds/frog.mp3",
  },
  {
    name: "goat",
    pic: "pictures/goat.jpeg",
    audio: "sounds/goat.mp3",
  },
  {
    name: "horse",
    pic: "pictures/horse.jpeg",
    audio: "sounds/horse.mp3",
  },
  {
    name: "lion",
    pic: "pictures/lion.jpeg",
    audio: "sounds/lion.mp3",
  },
  {
    name: "monkey",
    pic: "pictures/monkey.jpeg",
    audio: "sounds/monkey.mp3",
  },
  {
    name: "mouse",
    pic: "pictures/mouse.jpeg",
    audio: "sounds/monkey.mp3",
  },
  {
    name: "owl",
    pic: "pictures/owl.jpeg",
    audio: "sounds/owl.mp3",
  },
  {
    name: "pig",
    pic: "pictures/pig.jpeg",
    audio: "sounds/pig.mp3",
  },
  {
    name: "rooster",
    pic: "pictures/rooster.jpeg",
    audio: "sounds/rooster.mp3",
  },
  {
    name: "sheep",
    pic: "pictures/sheep.jpeg",
    audio: "sounds/sheep.mp3",
  },
  {
    name: "wolf",
    pic: "pictures/wolf.jpeg",
    audio: "sounds/wolf.mp3",
  },
];

const questions = [
  {
    question: "What animal makes this noise?",
    correct: "Alpaca",
    options: ["Wolf", "Sheep", "Alpaca", "Cow"],
  },
  {
    question: "What animal makes this noise?",
    correct: "Mouse",
    options: ["Mouse", "Monkey", "Duck", "Frog"],
  },
  {
    question: "What animal makes this noise?",
    correct: "Cat",
    options: ["Horse", "Rooster", "Wolf", "Cat"],
  },
  {
    question: "What animal makes this noise?",
    correct: "Frog",
    options: ["Goat", "Frog", "Elephant", "Donkey",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Elephant",
    options: ["Rooster", "Sheep", "Elephant", "Duck",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Cow",
    options: ["Horse", "Owl", "Wolf", "Cow",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Dog",
    options: ["Lion", "Dog", "Sheep", "Pig",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Pig",
    options: ["Monkey", "Frog", "Alpaca", "Pig",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Goat",
    options: ["Goat", "Pig", "Wolf", "Dog",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Duck",
    options: ["Mouse", "Frog", "Sheep", "Duck",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Donkey",
    options: ["Wolf", "Lion", "Donkey", "Dog",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Sheep",
    options: ["Sheep", "Owl", "Monkey", "Alpaca",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Horse",
    options: ["Lion", "Duck", "Horse", "Cat",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Owl",
    options: ["Goat", "Owl", "Cow", "Dog",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Wolf",
    options: ["Cat", "Frog", "Pig", "Wolf",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Rooster",
    options: ["Elephant", "Frog", "Elephant", "Donkey",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Lion",
    options: ["Goat", "Lion", "Elephant", "Donkey",]
  },
  {
    question: "What animal makes this noise?",
    correct: "Frog",
    options: ["Duck", "Cow", "Mouse", "Monkey",]
  },
];

let num = 0;
let num2 = 0;
let quizDone = false;
const wrapper = document.getElementById("wrapper");
const score = document.getElementById("scores");
const answer = document.getElementsByClassName("answer");
const title = document.getElementsByClassName("title")[0];

function beginQuestions() {
  initialQuestion();
  answerClicked();
}

function initialQuestion() {
  wrapper.innerHTML = `
    <div class="question-container">
        <p class="question">${questions[num].question}</p>
    </div>
    <div class="answer-container">
        <div class="answer">${questions[num].options[0]}</div>
        <div class="answer">${questions[num].options[1]}</div>
        <div class="answer">${questions[num].options[2]}</div>
        <div class="answer">${questions[num].options[3]}</div>
    </div>
    `;
}

function answerClicked() {
  for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", () => {
      if (quizDone) {
        location.reload();
        return;
      }
      if (answer[i].innerHTML === questions[num].correct) {
        score.innerHTML = num2 + 1;
        console.log("correct")
        nextQuestion();
      } else {
        alert("This is the wrong answer!");
        nextQuestion();
      }
    });
  }
}

function nextQuestion() {
  if (questions.length - 1 > num) {
    num = num + 1;
    initialQuestion();
    answerClicked();
  }
}
