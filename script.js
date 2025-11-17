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

     {
      question: "How do you select an element with class 'container' in CSS?",
      options: ["#container", ".container", "container", "*container"],
      correct: 1
    },
    {
      question: "How do you select an element with id 'header' in CSS?",
      options: [".header", "header", "#header", "*header"],
      correct: 2
    },
    {
      question: "How do you select ALL paragraph elements in CSS?",
      options: [".p", "#p", "p", "*p"],
      correct: 2
    },
    {
      question: "What does the CSS selector 'div p' select?",
      options: [
        "All divs and all paragraphs",
        "All paragraphs inside divs",
        "The first paragraph in a div",
        "Divs with class 'p'"
      ],
      correct: 1
    },
     {
      question: "What does 'display: flex' do?",
      options: [
        "Makes element invisible",
        "Creates a flexible box layout for organizing child elements",
        "Increases font size",
        "Changes text color"
      ],
      correct: 1
    },
    {
      question: "What's the default display value for a <div> element?",
      options: ["inline", "block", "flex", "grid"],
      correct: 1
    },
    {
      question: "What's the default display value for a <span> element?",
      options: ["block", "inline", "flex", "inline-block"],
      correct: 1
    },
     {
      question: "What does '3rem' mean in CSS?",
      options: [
        "3 pixels",
        "3 times the root element's font size",
        "3 percent of viewport",
        "3 millimeters"
      ],
      correct: 1
    },
    {
      question: "Which CSS unit is relative to the parent element's font size?",
      options: ["px", "rem", "em", "vw"],
      correct: 2
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "font-color", "color", "text-style"],
      correct: 2
    },
    {
      question: "Which CSS property is used to change the font size?",
      options: ["text-size", "font-style", "font-size", "text-style"],
      correct: 2
    },
    {
      question: "What's the difference between 'let' and 'const'?",
      options: [
        "No difference",
        "'let' can be reassigned, 'const' cannot be reassigned",
        "'const' can be reassigned, 'let' cannot",
        "They work exactly the same"
      ],
      correct: 1
    },
    {
      question: "Which keyword should you use for a variable that won't change?",
      options: ["var", "let", "const", "final"],
      correct: 2
    },
    {
      question: "What is 'var' in JavaScript?",
      options: [
        "The modern way to declare variables",
        "An older way to declare variables with function scope",
        "A constant value",
        "A data type"
      ],
      correct: 1
    },
    {
      question: "Can you reassign a 'const' variable?",
      options: [
        "Yes, anytime",
        "No, it will throw an error",
        "Only once",
        "Only inside functions"
      ],
    },
     {
      question: "Which of these is NOT a JavaScript data type?",
      options: ["String", "Number", "Character", "Boolean"],
      correct: 2
    },
    {
      question: "What data type is this: ['apple', 'banana', 'orange']?",
      options: ["Object", "Array", "String", "List"],
      correct: 1
    },
    {
      question: "What data type is this: {name: 'John', age: 25}?",
      options: ["Array", "Object", "String", "Dictionary"],
      correct: 1
    },
    {
      question: "What will 'typeof []' return in JavaScript?",
      options: ["'array'", "'object'", "'list'", "'undefined'"],
      correct: 1
    },
    {
      question: "What data type is 'true' or 'false'?",
      options: ["Binary", "Boolean", "Bit", "String"],
      correct: 1
    },
     {
      question: "What is the correct way to write a JavaScript function?",
      options: [
        "function myFunction()",
        "def myFunction()",
        "function:myFunction()",
        "func myFunction()"
      ],
      correct: 0
    },
    {
      question: "How do you call a function named 'greet'?",
      options: ["call greet()", "greet()", "function greet()", "run greet()"],
      correct: 1
    },
    {
      question: "What are the values passed to a function called?",
      options: ["parameters", "arguments", "both are correct", "variables"],
      correct: 2
    },
    {
      question: "What keyword is used to return a value from a function?",
      options: ["give", "return", "output", "result"],
      correct: 1
    },
    {
      question: "Which statement checks if a condition is true?",
      options: ["for", "if", "while", "switch"],
      correct: 1
    },
    {
      question: "What comes after 'if' to check another condition?",
      options: ["or if", "else if", "elif", "then if"],
      correct: 1
    },
    {
      question: "Which operator is used for strict equality in JavaScript?",
      options: ["=", "==", "===", "!="],
      correct: 2
    },
    {
      question: "What's the difference between == and ===?",
      options: [
        "No difference",
        "== checks value only, === checks value and type",
        "=== is faster",
        "== is more accurate"
      ],
      correct: 1
    },
    {
      question: "Which loop is best for iterating through an array?",
      options: ["while", "do while", "for or forEach", "if"],
      correct: 2
    },
    {
      question: "What does a 'for' loop need to work properly?",
      options: [
        "Only a condition",
        "Initialization, condition, and increment",
        "Just an array",
        "A function"
      ],
      correct: 1
    },
    {
      question: "How do you loop through an array using forEach?",
      options: [
        "array.forEach(function(item) { })",
        "forEach(array, function(item) { })",
        "array.loop(item)",
        "for(item in array)"
      ],
      correct: 0
    },
    {
      question: "Which method selects an element by ID?",
      options: [
        "getElementByID()",
        "getElementById()",
        "selectById()",
        "queryId()"
      ],
      correct: 1
    },
    {
      question: "Which method can select elements by class, id, or tag?",
      options: [
        "getElement()",
        "selectAll()",
        "querySelector()",
        "findElement()"
      ],
      correct: 2
    },
    {
      question: "How do you select ALL elements with class 'item'?",
      options: [
        "document.querySelector('.item')",
        "document.querySelectorAll('.item')",
        "document.getElements('.item')",
        "document.selectAll('.item')"
      ],
      correct: 1
    },
    {
      question: "What does querySelector return if nothing is found?",
      options: ["undefined", "null", "false", "empty string"],
      correct: 1
    },
    {
      question: "How do you create a new HTML element in JavaScript?",
      options: [
        "document.new('div')",
        "document.createElement('div')",
        "new Element('div')",
        "createElement('div')"
      ],
      correct: 1
    },
    {
      question: "Which property changes the text content of an element?",
      options: [".text", ".textContent", ".content", ".innerText"],
      correct: 1
    },
    {
      question: "What's the difference between textContent and innerHTML?",
      options: [
        "No difference",
        "textContent sets text only, innerHTML can include HTML tags",
        "innerHTML is faster",
        "textContent is deprecated"
      ],
      correct: 1
    },
    {
      question: "Which method adds a child element to a parent?",
      options: ["addChild()", "appendChild()", "insertChild()", "add()"],
      correct: 1
    },
    {
      question: "Which method removes an element from the DOM?",
      options: ["delete()", "removeElement()", "remove()", "clear()"],
      correct: 2
    },
    {
      question: "How do you add a CSS class to an element?",
      options: [
        "element.class.add('active')",
        "element.classList.add('active')",
        "element.addClass('active')",
        "element.addClass('active')"
      ],
      correct: 1
    },
    {
      question: "Which method attaches an event listener to an element?",
      options: [
        "attachEvent()",
        "addEventListener()",
        "onEvent()",
        "bindEvent()"
      ],
      correct: 1
    },
    {
      question: "What are the two arguments for addEventListener?",
      options: [
        "element and function",
        "event type and callback function",
        "action and result",
        "trigger and response"
      ],
      correct: 1
    },
    {
      question: "What does event.preventDefault() do?",
      options: [
        "Removes the element",
        "Stops the default browser behavior",
        "Creates a new event",
        "Prevents all future events"
      ],
      correct: 1
    },
    {
      question: "What does event.target represent?",
      options: [
        "The parent element",
        "The element that triggered the event",
        "The window object",
        "All elements on page"
      ],
      correct: 1
    },
    {
      question: "Which event fires when you click an element?",
      options: ["'press'", "'clicked'", "'click'", "'onclick'"],
      correct: 2
    },
       {
      question: "What is Node.js?",
      options: [
        "A JavaScript framework",
        "A JavaScript runtime environment",
        "A database",
        "A CSS preprocessor"
      ],
      correct: 1
    },
    {
      question: "What does npm stand for?",
      options: [
        "Node Package Manager",
        "New Project Manager",
        "Node Programming Method",
        "Network Package Manager"
      ],
      correct: 0
    },
    {
      question: "What does DOM stand for?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Digital Output Method",
        "Document Orientation Model"
      ],
      correct: 0
    },
     {
      question: "Where should you look for JavaScript errors?",
      options: [
        "HTML file",
        "Browser console (F12 or right-click → Inspect → Console)",
        "CSS file",
        "Server logs"
      ],
      correct: 1
    },
    {
      question: "What does console.log() do?",
      options: [
        "Creates a new element",
        "Prints information to the browser console for debugging",
        "Changes text on page",
        "Stops code execution"
      ],
      correct: 1
    },
    {
      question: "Why should the <script> tag go before </body>?",
      options: [
        "It looks better",
        "So HTML elements load before JavaScript tries to select them",
        "It's faster",
        "It's required by law"
      ],
      correct: 1
    }
  ];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer =  null;

window.startQuiz = function() {
  startScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  currentQuestionIndex = 0;
  score = 0;
  totalQuestionDisplay.textContent = quizData.length;
  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = null;
  nextBtn.style.display = 'none';

  const currentQuestion = quizData[currentQuestionIndex];
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressFill.style.width = progress + '%';

  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-btn';
    button.textContent = option;
    button.onclick = () => selectedAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function selectedAnswer(selectedIndex) {
  if (selectedAnswer !==null) return;

  selectedAnswer = selectedIndex;
  const currentQuestion = quizData[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQuestion.correct) {
    score++;
    buttonsp[selectedIndex].classList.add('correct');
    currentScoreDisplay.textContent = score;
  } else {
    buttons[selectedIndex].classList.add('incorrect');
    buttons[currentQuestion.correct].classList.add('correct');
  }

  nextBtn.style.display = 'block';
}





})
