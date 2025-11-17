document.addEventListener("DOMContentLoaded", function () {
  console.log("Quiz Loading!");

  const startScreen = document.getElementById('startScreen');
  const quizScreen = document.getElementById('quizScreen')
  const resultScreen = document.getElementById('resultsScreen')
  const questionText = document.getElementById('questionText')
  const optionsContainer = document.getElementById('optionContainer')
  const nextBtn = document.getElementById('nextBtn')
  const questionCounter = document.getElementById('questionCounter')
  const progressFill = document.getElementById('progressFill')
  const currentScoreDisplay = document.getElementById('currentScoreDisplay')
  const totalQuestionDisplay = document.getElementById('totalQuestionDisplay')

  const quizData = [
    {
      question:
        "What are the three main structural tags in every HTML document?",
      options: [
        "<html>, <head>, <body>",
        "<div>, <span>, <p>",
        "<header>, <main>, <footer>",
        "<title>, <meta>, <link>",
      ],
      correct: 0,
    },

    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Tech Modern Language",
        "Home Tool Markup Language",
        "Hyper Tech Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      correct: 0,
    },

    {
      question: "Which tag is used to create a clickable button?",
      options: ["<btn>", "<button>", "<click>", "<input type='click'>"],
      correct: 1,
    },

    {
      question: "What's the difference between <div> and <span>?",
      options: [
        "No difference, they're the same",
        "<div> is block-level, <span> is inline",
        "<span> is block-level, <div> is inline",
        "Both are always inline",
      ],
      correct: 1,
    },

     {
      question: "Which tag creates a text input field?",
      options: [
        "<textbox>",
        "<input type='text'>",
        "<text>",
        "<field>"
      ],
      correct: 1
    },
    {
      question: "What tag is used to create a form?",
      options: ["<input>", "<fieldset>", "<form>", "<submit>"],
      correct: 2
    },

      {
      question: "Which attribute uniquely identifies an HTML element?",
      options: ["class", "name", "id", "key"],
      correct: 2
    },
    {
      question: "Which attribute can be applied to multiple elements?",
      options: ["id", "class", "unique", "single"],
      correct: 1
    },
    {
      question: "What are data attributes used for?",
      options: [
        "Styling elements",
        "Storing custom data on HTML elements",
        "Creating forms",
        "Adding images"
      ],
      correct: 1
    },
    {
      question: "How do you write a data attribute in HTML?",
      options: [
        "custom-data='value'",
        "data-custom='value'",
        "@data-custom='value'",
        "data:custom='value'"
      ],
      correct: 1
    },





  ];

})
