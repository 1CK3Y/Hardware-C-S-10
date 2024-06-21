document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const quizQuestions = [
        {
            question: "What is the primary function of a video card?",
            answers: {
                a: "To execute instructions and perform calculations",
                b: "To handle and accelerate the rendering of images, videos, and animations",
                c: "To store data temporarily for quick access"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the purpose of a CPU?",
            answers: {
                a: "To handle graphical computations",
                b: "To provide the necessary power connections and data pathways",
                c: "To execute instructions and perform calculations"
            },
            correctAnswer: "c"
        },
        {
            question: "Which component is known as the backbone of a computer?",
            answers: {
                a: "RAM",
                b: "Motherboard",
                c: "Video Card"
            },
            correctAnswer: "b"
        },
        {
            question: "What is a high-end example of RAM?",
            answers: {
                a: "Corsair Vengeance DDR5-5200",
                b: "Gigabyte Z790 Aorus Xtreme",
                c: "Nvidia GeForce RTX 4090"
            },
            correctAnswer: "a"
        },
        {
            question: "Which high-end CPU is mentioned in the text?",
            answers: {
                a: "Intel Core i5-10400",
                b: "AMD Ryzen 5 5600X",
                c: "Intel Core i9-14900"
            },
            correctAnswer: "c"
        },
        {
            question: "What is the main purpose of RAM?",
            answers: {
                a: "To provide fast access to data and instructions for the CPU",
                b: "To store long-term data for applications and files",
                c: "To handle the rendering of images and videos"
            },
            correctAnswer: "a"
        }
    ];

    function buildQuiz() {
        const output = [];

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length} correct`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});