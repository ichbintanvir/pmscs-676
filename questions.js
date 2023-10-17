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
        question: 'Explain information from intuitive point of view and derived the expression of information carried by composite message.',
        slide: '[6,7]'
    },
    {
        Lecture: '1',
        question_no: '3',
        question: 'Explain information from engineering point of view.',
        slide: '8'
    },
    {
        Lecture: '1',
        question_no: '4',
        question: 'What will happend if binary or gray code is used in a communication system.',
        slide: '10 only first pera'
    },
    {
        Lecture: '2',
        question_no: '1',
        question: 'Derive the expression of Entropy.',
        slide: '16'
    },
    {
        Lecture: '2',
        question_no: '2',
        question: 'Explain information rate with apporopiate diagram.',
        slide: '18'
    },
    {
        Lecture: '2',
        question_no: '3',
        question: 'For a binary source show that entropy is maximum where messages are equalprobable. Determain the maximum entropy.',
        slide: '20'
    },
    {
        Lecture: '2',
        question_no: '4',
        question: 'Problems on Shannon-Fano Algorithm.',
        slide: '[26-31]'
    },
    {
        Lecture: '3',
        question_no: '1',
        question: 'Big problem',
        slide: '32'
    },
    {
        Lecture: '3',
        question_no: '2',
        question: 'Define source coding. Compare lossless and lossy compression.',
        slide: '[64 + own idea]'
    },
    {
        Lecture: '3',
        question_no: '3',
        question: 'Problem on Huffman Coding.',
        slide: '[70-73]'
    },
    {
        Lecture: '3',
        question_no: '4',
        question: 'Problem on prefix code',
        slide: '75'
    },
    {
        Lecture: '3',
        question_no: '5',
        question: 'Problem on Lempel ziv encoding.',
        slide: '[79-82]'
    },
    {
        Lecture: '3',
        question_no: '6',
        question: 'Problem on Lempel ziv code for binary sequence.',
        slide: '[84,86]'
    },
    {
        Lecture: '3',
        question_no: '7',
        question: 'Compare Huffman code and lampelziv code.',
        slide: '85'
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