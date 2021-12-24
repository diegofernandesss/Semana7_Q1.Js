do{
  item = Number(prompt('Digite quantas vezes a mensagem vai ser mostrada: '));
  if (item) {
    break;
  }
} while (Boolean(item)== false);

var mensagem = prompt('Digite a mensagem que será exibida: ');

function creatList(item,mensagem){
  let i = 0;
  let lista = document.querySelector('ul');
  
  while (i < item){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(mensagem + ' ' + (i+1)));
    lista.appendChild(li);
    i++
  }
}

creatList(item,mensagem);
