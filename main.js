const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');

let gridNo = 16;

function createGrid(gridNo) {
    container.style.width = (gridNo * 22) + 'px';
    container.style.height = (gridNo * 22) + 'px';
    
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
}


container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = 'orange';
}, false);

clearBtn.addEventListener('click', refreshGrid);

function refreshGrid(){
    gridNo = Number(prompt('How many squares you want to generate? (Max squares: 100)'));
    if(gridNo > 0 && gridNo <= 100){
        let innerDiv = container.lastElementChild;
        while(innerDiv) {
            container.removeChild(innerDiv);
            innerDiv = container.lastElementChild;
        }
        createGrid(gridNo);
    } else {
        alert('Invalid input!');
    }
}

createGrid(gridNo);