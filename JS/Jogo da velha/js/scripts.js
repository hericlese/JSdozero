let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;


// Adicionar o evento de click aos boxes

for(let i = 0; i < boxes.length; i++){

        //quando alguem clica na caixa
        boxes[i].addEventListener("click",function(){

            let el = checkEl(player1, player2);


            //Verifica se ja tem X ou O

            if(this.childNodes.length == 0){

                
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);
            
            //computar jogada

            if(player1 == player2){
                player1 ++;
            } else {
                player2 ++;
            }

            //checar quem venceu
            checkWinCondition();
            
        }  
        });
}

//função seleção de player

function checkEl(player1, player2){

    if(player1 == player2) {
        //x
        el= x;
    } else {
        //o
        el = o;
    }
    return el;    
}

// função ver quem ganhou
function checkWinCondition(){

    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
    let b1 = document.getElementById("block-1");
}

