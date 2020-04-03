let peso;
let altura;
let imc;

peso = prompt(`Digite seu peso `);
altura = prompt(`Digite sua altura `);

imc = peso * altura;

if(imc < 17 )
{
    document.write(` Vc está muito abaixo do peso, seu IMC é ${imc}`);
}
else if(imc =>17 && imc >18.49){

    document.write(`Vc está abaixo do peso, seu IMC é ${imc}`);

}else if(imc > 18.5 && imc < 24.99){

    document.write(`Seu peso é normal, IMC é ${imc}`);

}else if(imc > 25 && imc < 29.99){

    document.write(`Seu peso está acima, IMC é ${imc}`);

}else if(imc > 30 && imc < 34.99){

    document.write(`Obesidade I, IMC é ${imc}`);

}else if(imc > 35 && imc < 39.99){

    document.write(`Obesidade I, IMC é ${imc}`);
}