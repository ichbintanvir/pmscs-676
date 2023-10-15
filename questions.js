const list = [
    {
        Lecture: '1',
        question_no: '1',
        question: 'Draw the complete diagram of a communication system',
        slide: '3'
    },
    {
        Lecture: '1',
        question_no: '2',
        question: 'Explain information from intuitive point of view',
        slide: '6'
    },
    {
        Lecture: '',
        question_no: '',
        question: '',
        slide: ''
    },
];

const questions = document.getElementById('questions');
const totalQuestion = document.getElementById('total-question');
let count = 0;
list.forEach((ele) => {
    const cardBody = document.createElement('div');
    cardBody.classList.add('card', 'mb-2');
    cardBody.innerHTML = `
    <div class="card-body">
        <p>${ele.Lecture}.${ele.question_no}</p>
        <h4>${ele.question}</h4>
        <h6 class="text-danger">Answer : Slide No - ${ele.slide}</h5>
    </div>
    `;
    questions.appendChild(cardBody);
    count++;
})
totalQuestion.innerText = count;