setTimeout(()=> {
    console.log('üllatus');
}, 10_000);

console.log('ühtegi üllatust ei tule');

setInterval(() => {
    console.log('mimi');
}, 10_000 );

let answer = fetch('http://127.0.0.1:5500/').then(response => {
    return response.text();
}).then(text => {
    console.log(text);
});

console.log(answer);

async function getText(){
let response = await fetch('http://127.0.0.1:5500/');
console.log(response);
let text = await response.text();
console.log(text); 
}

await getText();