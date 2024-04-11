const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;

function slider() {
  contador++;

  //se o contador for maior que o a quantidade de imagens ele automaticamente irá voltar para a posição 0 ou seja, quando o usuário chegar na última imagem automaticamente ele retorna para a posição 0
  if (contador > imagens.length - 1) {
    contador = 0;
  }

  //
  box.style.transform = `translateX(${-contador * 1250}px)`;
}



// executa uma função no tempo pré-definido, nesse caso, a função será a slider e o tempo será de 2000 em 2000ms
// recebe a função a repetir e o tempo em ms - milisegundos
setInterval(slider, 2000);
