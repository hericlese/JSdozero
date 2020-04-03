let litroPorKm;
let tempo;
let velocidade;

litroPorKm = 12;
tempo = 10;
velocidade = 81;

document.write(`Litros por km utilizado ${litroPorKm} <p/>`);
document.write(`Velocidade utilizada ${velocidade}<p/>`);
document.write(`Tempo utilizado ${tempo}<p/>`);




setTimeout(
    function(){alert(`Vc utilizou ${(velocidade*tempo)/litroPorKm} litros de combustivel para percorrer ${tempo} horas de viagem com a velocidade de ${velocidade}km/h`);},
2000);