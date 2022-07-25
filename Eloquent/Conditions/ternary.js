const select = document.getElementById('theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.background = bgColor;
    html.style.color = textColor;
}

select.addEventListener("change", () => (select.value === 'black') ? update("black", "white") : ("white", "black"));