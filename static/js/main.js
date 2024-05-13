const adviceBtn = document.querySelector('.generate-advice-btn');
const adviceIdSpan = document.querySelector('.advice-id');
const adviceQuote = document.querySelector('.advice-quote');

const generateAdvice = () => {
    fetch("https://api.adviceslip.com/advices", { cache: 'no-cache' })
        .then((response) => response.json())
        .then((data) => {
            const advice = data.slip.advice;
            const adviceId = data.slip.id;

            adviceQuote.innerHTML = `"${advice}"`;
            adviceIdSpan.innerHTML = adviceId;
        })
        .catch(() => {
            adviceQuote.innerHTML = 'Something went wrong, please try again later'
        });
};


adviceBtn.addEventListener('click', generateAdvice);
document.addEventListener('DOMContentLoaded', generateAdvice);
