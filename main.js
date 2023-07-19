// api link
const API_LINK = "https://api.adviceslip.com/advice";

const advice_no = document.querySelector(".advice-no");
const advice_quote = document.querySelector(".advice-quote");
const btn = document.querySelector(".btn");

// async makes a function return a Promise
//await makes a function wait for a Promise
// Promice == object with status like pending


// fetchadvice function
const fetchAdvice = async () =>{
    // fetching responce from api link
    const response = await fetch(API_LINK);
    // responce.json() to get quote from responce object which is a promice 
    const advice = await response.json();
    return advice;
};

const displayAdvice = (adviceObj) => {
    const {id, advice} = adviceObj;
    advice_no.textContent = `ADVICE #${id}`;
    advice_quote.textContent = advice;

};

const generateNewAdvice = async () =>{
    const advice_data = await fetchAdvice();
    const adv = advice_data.slip;

    // displaying function
    displayAdvice(adv);

}


window.addEventListener('DOMContentLoaded',() =>{
    btn.addEventListener('click',generateNewAdvice);
})