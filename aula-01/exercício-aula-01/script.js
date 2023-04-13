/*Montar um script que pergunte:
Nome
Idade
Profissão

E logo após obter essas informações exiba uma mensagem dizendo "Olá me chamo {NOME}, tenho ${IDADE} e atualmente trabalho com ${PROFISSÃO}"*/

var userName = prompt('Qual o seu nome?');
var userAge = prompt('Qual a sua idade?');
var userJob = prompt('Qual a sua profissão?');

const mensagem = `Olá meu nome é ${userName}, tenho ${userAge} anos e atualmente sou ${userJob}`;

alert(mensagem);


