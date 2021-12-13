const container = document.querySelector('.container');

let gridNo = 16;

for(let i = 0; i < gridNo; i++){
    const innerCont = document.createElement('div');
    innerCont.className = 'innercont row';
    container.appendChild(innerCont);
    for(let j = 0; j < gridNo; j++) {
        const square = document.createElement('div');
        square.classList.add('sqr');
        
        innerCont.appendChild(square);
    }
}


