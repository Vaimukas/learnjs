let num = 5;
if(num > 10) {
    console.log('suurem kui 10')
} else if (num == 10){
    console.log('võrdne')
} else {
    console.log('väiksem kui 10')
}

let day = new Date('2025-10-14').getDay();
console.log(day);
if(day === 1) {
    console.log('esmaspäev');
} else if (day === 2) {
  console.log('teisipäev');
} else if (day === 3) { 
    console.log('kolmapäev');
} else if (day === 4) { 
    console.log('neljapäev');
} else if (day === 5) {
    console.log('reede');
} else if (day === 6) {
    console.log('laupäev');
} else if (day === 0) {
    console.log('pühapäev');
}

switch (day) {
    case 1:
        console.log('esmaspäev');
        break;
    case 2:
        console.log('teisipäev');
        break;
    case 3:
        console.log('kolmapäev');
        break;
    case 4:
        console.log('neljapäev');
        break;
    case 5:
        console.log('reede');
        break;
    case 6:
        console.log('laupäev');
        break;
    case 0:
        console.log('pühapäev');
        break;
    default: 
        console.log('päev');
}