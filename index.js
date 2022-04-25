// НАДОЕДАЛКА

// import BSN from 'bootstrap.native';
// const modal = new BSN.Modal('#exampleModal');

// const refs = {
//     modal: document.querySelector('#exampleModal'),
//     subscribeBtn:document.querySelector('button[data-subscribe]'),
// };
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;

// openModal();

// // refs.modal.addEventListener('hide.bs.modal', () => {
// //    openModal();
// // }); или как на 19-й

// refs.modal.addEventListener('hide.bs.modal', openModal);
// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// // refs.subscribeBtn.addEventListener('click', () => {
// //     hasSubscribed = true;
// //     modal.hide();
// // }); или как на 20-й и 39-42

// function openModal() {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('Максимальное число надоеданий или человек подписался');
//         return;
//     }
//     setTimeout(() => {
//         console.log('Открываем модалку');
//         modal.show();
//         promptCounter += 1;
//     }, PROMPT_DELAY);
// };

// function onSubscribeBtnClick() {
//     hasSubscribed = true;
//     modal.hide();
// }

// DATE
// создание (целый объект)
// const date = new Date(10000);
// console.dir(date);

// разница во времени
// const date1 = Date.now();
// setTimeout(() => {
//     const date2 = Date.now();
//     console.log(date2 - date1);
// }, 3000);

// Таймер
const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

class Timer { 
    constructor() { 
        this.intervalId = null;
        this.isActive = false;
    }
}

const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
         }
        const startTime = Date.now();
        this.isActive = true;
        this.intervalId = setInterval(() => { 
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = getTimeComponents(deltaTime);
            updateClockface(time);
                    }, 1000);
    },
    stop() { 
        clearInterval(this.intervalId);
        this.isActive = false;
    },
};

refs.startBtn.addEventListener('click', () => {
    timer.start();
});
refs.stopBtn.addEventListener('click', () => {
    timer.stop();
    });

function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};

function pad(value) { 
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) { 
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, mins, secs };
};