const adviceBtn = document.querySelector('.generate-advice-btn');
const adviceIdSpan = document.querySelector('.advice-id');
const adviceQuote = document.querySelector('.advice-quote');

const generateAdvice = () => {
    const errorMessage = 'Something went wrong, please try again later';
    fetch("https://api.adviceslip.com/advice", { cache: 'no-cache' })
        .then((response) => response.text())
        .then((text) => {
            try {
                const data = JSON.parse(text);

                if (data.slip) {
                    const advice = data.slip.advice;
                    const adviceId = data.slip.id;

                    adviceQuote.innerHTML = `"${advice}"`;
                    adviceIdSpan.innerHTML = adviceId;
                } else {
                    adviceQuote.innerHTML = errorMessage;
                }
            } catch { adviceQuote.innerHTML = errorMessage; }


        }).catch(() => { adviceQuote.innerHTML = errorMessage });

};


adviceBtn.addEventListener('click', generateAdvice);
document.addEventListener('DOMContentLoaded', generateAdvice);
