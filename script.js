console.log(window, {document});
let heading = document.querySelector('h1');
console.log({heading});
heading.innerText = "gigigogo";

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let button = document.querySelector('button');
button.addEventListener('click', event => {
    console.log(event);
    heading.innerText = "gogogigi";
    heading.style.color = getRandomColor();
    document.documentElement.style.background = getRandomColor();
    document.body.style.background = getRandomColor();
});

setInterval(() => {
        document.documentElement.style.background = getRandomColor();
}, 10_000)

let input = document.querySelector('input');
input.addEventListener('input', event => {
    console.log(event);
    heading.innerText = input.value.split('').reverse().join('');
})