function calcMedia(x,y){
    let m;
    m = (x + y)/2 ;
    if (m >=6 ){
        console.log(`Aluno Aprovado!!! sua media foi: ${m}`)
    } else{
        console.log(`Aluno Reprovado!!! sua media foi: ${m}`)
    }
}

calcMedia(6,7);
calcMedia(4,8);
calcMedia(2,10);
calcMedia(2,7);
calcMedia(10,10);