let currentQuestionIndex = 0;
const questions = [
    // Step 1: Personal Details
    "Enter your name: ",
    "Enter your surname:",
    "Enter your age: ",
    "Enter your Gender: ",

    // Step 2: Volunteering Tasks
    "Why volunteer for better health?",
    "How does volunteering boost well-being?",
    "What specific health benefits come from volunteering?",
    "Can volunteering improve mental health?",
    
    
    // Step 3: Qualifications
    "Main field of study:",
    "Highest degree:",
    "University:",
    "Completion year:",
    
    // Step 4: Availability and contact
    "Availability for volunteering:",
    "Surname:",
    "Mobile number:",
    "Email:",
];

function startQuiz() {
    document.querySelector('.start_btn').style.display = 'none';
    displayQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        updateProgressBar();
    } else {
        alert("End of questions!");
    }
}

function updateProgressBar() {
    let progress = ((currentQuestionIndex + 1) / questions.length) * 100; // Adjusted calculation
    document.getElementById("progressBar").value = progress;
    document.getElementById("progressText").textContent = `${progress}% Complete`;
}

function skipQuestion() {
    let currentStep = Math.floor(currentQuestionIndex / 4) + 1;
    let currentQuestion = currentQuestionIndex % 4 + 1;
    let skippedQuestion = questions[currentQuestionIndex];

    // Display the skipped step, question number, and question in the output box
    document.getElementById("outputContent").innerHTML += `<p> ${skippedQuestion}</p>`;
    document.getElementById("outputBox").style.display = "block";

    alert("Question skipped!");
    nextQuestion();
}

function displayQuestion() {
    let currentStep = Math.floor(currentQuestionIndex / 4) + 1;
    let currentQuestion = currentQuestionIndex % 4 + 1;
    document.getElementById("step_info").textContent = `STEP ${currentStep} ${getStepName(currentStep)} | Question ${currentQuestion}/${getStepCount(currentStep)}`;
    document.getElementById("prompttext").textContent = questions[currentQuestionIndex];
    document.getElementById("promptinput").value = "";
}

function getStepName(step) {
    switch (step) {
        case 1:
            return "Personal Details";
        case 2:
            return "Volunteering Tasks";
        case 3:
            return "Qualifications";
        case 4:
            return "Availability and Contact";
        default:
            return "";
    }
}

function getStepCount(step) {
    switch (step) {
        case 1:
        case 2:
        case 3:
        case 4:
            return 4;
        default:
            return 0;
    }
}

function submitAnswer() {
    let answer = document.getElementById("promptinput").value;
    if (answer.trim() === "") {
        alert("Please enter an answer before proceeding.");
        return; // Stop execution if answer is empty
    }
    
    let currentStep = Math.floor(currentQuestionIndex / 4) + 1;
    let currentQuestion = currentQuestionIndex % 4 + 1;
    let output = ` ${questions[currentQuestionIndex]}  ${answer}`;
    
    // Display the question and answer in the output box
    document.getElementById("outputContent").innerHTML += "<p>" + output + "</p>";
    document.getElementById("outputBox").style.display = "block";

    nextQuestion();
}




