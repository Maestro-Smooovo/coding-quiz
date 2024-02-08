const questions = [
    {
      question: "How do you view the console?",
      options: ["Right-click and click inspect", "Left-click-and click inspect", "Click the X in the top right corner", "Log off"],
      correctAnswer: "Right-click and click inspect"
    },
    {
      question: "Which of the following is NOT a programming language?",
      options: ["HTML", "CSS", "JavaScript", "C+++"],
      correctAnswer: "C+++"
    },
    {
      question: "What does 'API' stand for?",
      options: ["Application Programming Interface", "A Printer Interface", "All Pirates Investigate", "All Power Inside"],
      correctAnswer: "Application Programming Interface"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  let timeRemaining;
  
  function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("timer-container").style.display = "block";
    
    timeRemaining = 120; // Reset the timer for each quiz
    updateTimerDisplay();
  
    showQuestion();
    startTimer();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
  
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score += 10; // Each correct answer is worth 10 points
    } else {
      timeRemaining -= 10; // Subtract 10 seconds for incorrect answers
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function startTimer() {
    timer = setInterval(() => {
      timeRemaining--;
  
      if (timeRemaining <= 0) {
        endQuiz();
      }
  
      updateTimerDisplay();
    }, 1000);
  }
  
  function updateTimerDisplay() {
    document.getElementById("timer").textContent = `Time: ${timeRemaining}s`;
  }
  
  function endQuiz() {
    clearInterval(timer);
  
    document.getElementById("question-container").style.display = "none";
    document.getElementById("timer-container").style.display = "none";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").textContent = `Your Score: ${score} points`;
  }
  
  function saveScore() {
    const initials = document.getElementById("initials").value;
    // You can save the initials and score to a server or local storage as needed.
    alert(`Score saved!\nInitials: ${initials}\nScore: ${score}`);
  }
  