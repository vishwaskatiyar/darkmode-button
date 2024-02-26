const container = document.querySelector('.container');
const darkBtn = document.querySelector('.dark-btn');

container.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
