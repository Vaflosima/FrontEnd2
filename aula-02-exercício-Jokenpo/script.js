function start(nome, dificuldade) {
    
    let pontuacaoJogador = 0;
    let pontuacaoMaquina = 0;
    let verificador = 0;

    do {
        var jogadaUsuario;
        var jogadaMaquina;  
        
        // 01 - Criando variáveis de jogada
        if (dificuldade == 1) {
            
            jogadaUsuario = parseInt(prompt('Vamos Jogar! Pedra: 1, Papel: 2, Tesoura: 3'));
            var easy = Math.floor(Math.random() * 3) + 1;

            if ((easy === 1 || easy === 3) && jogadaUsuario === 1) {
                jogadaMaquina = 3;
            } else if ((easy === 1 || easy === 3) && jogadaUsuario === 2) {
                jogadaMaquina = 1;
            } else if ((easy === 1 || easy === 3) && jogadaUsuario === 3) {
                jogadaMaquina = 2;
            } else {
                jogadaMaquina = Math.floor(Math.random() * 3) + 1; 
            }
        } 
        
        else if (dificuldade == 2) {
            jogadaUsuario = parseInt(prompt('Vamos Jogar! Pedra: 1, Papel: 2, Tesoura: 3'));
            jogadaMaquina = Math.floor(Math.random() * 3) + 1;
        } 
        
        else if (dificuldade == 3) {
            jogadaUsuario = parseInt(prompt('Vamos Jogar! Pedra: 1, Papel: 2, Tesoura: 3'));
            var hard = Math.floor(Math.random() * 3) + 1;

            if ((hard === 1 || hard === 3) && jogadaUsuario === 1) {
                jogadaMaquina = 2;
            } else if ((hard === 1 || hard === 3) && jogadaUsuario === 2) {
                jogadaMaquina = 3;
            } else if ((hard === 1 || hard === 3) && jogadaUsuario === 3) {
                jogadaMaquina = 1;
            } else {
                jogadaMaquina = Math.floor(Math.random() * 3) + 1; 
            }
        };


        // 02 - Decisão de jogo

            if (jogadaUsuario === 1 && jogadaMaquina === 1) {
                alert(`${nome}: Pedra \nMáquina: Pedra. \nO jogo deu Velha!`);
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 2) {
                alert(`${nome}: Papel \nMáquina: Papel. \nO jogo deu Velha!`);
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 3) {
                alert(`${nome}: Tesoura \nMáquina: Tesoura. \nO jogo deu Velha! `);
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 2) {
                alert(`${nome}: Pedra \nMáquina: Papel. \nA máquina venceu! `);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 3) {
                alert(`${nome}: Papel \nMáquina: Tesoura. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 3 && jogadaMaquina === 1) {
                alert(`${nome}: Tesoura \nMáquina: Pedra. \nA máquina venceu!`);
                pontuacaoMaquina++;
            }
            else if (jogadaUsuario === 1 && jogadaMaquina === 3) {
                alert(`${nome}: Pedra \nMáquina: Tesoura. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            }
            else if (jogadaUsuario === 2 && jogadaMaquina === 1) {
                alert(`${nome}: Papel \nMáquina: Pedra. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            } 
            else if (jogadaUsuario === 3 && jogadaMaquina === 2) {
                alert(`${nome}: Tesoura \nMáquina: Papel. \nO usuário ${nome} venceu!`);
                pontuacaoJogador++;
            } 
            else if(isNaN(jogadaUsuario)){
                verificador = 1;
                alert('Fim de jogo!');
            } else {
                console.log(jogadaUsuario);
                alert('Essa opção não existe !!!');
            }

            // 03 - Verificador de Partida
            if (pontuacaoJogador === 2) {
                verificador = 1;
                alert(`O usuário ${nome} atingiu 2 pontos e venceu !!!`);
            } 
            else if ( pontuacaoMaquina === 2) {
                verificador = 1;
                alert('A máquina atingiu 2 pontos e venceu !!!');
            } else {
            
            }

    } while (verificador === 0); 

}

function dificuldade() {
    let verificadorDificuldade = 0;
    do {
        
        let dificuldade = prompt('Dificuldade: Fácil - 1, Normal -2, Difícil -3 ');
        
        if(dificuldade > 3 || dificuldade < 1) {
            alert('Essa dificuldade não existe');
        } else {
            verificador = 1;
            return dificuldade;
        }
        console.log(dificuldade);
    } while (verificadorDificuldade === 0); 

}

function confirmacao() {
    
    var confirmacao = confirm('Você deseja jogar?');
    
    if (confirmacao === true) {

        let nome = prompt('Digite seu nome para Jogar: ');
        let dificuldadeEscolhida = dificuldade();

        alert(`Vamos começar o jogo ${nome}, o nível de dificuldade foi ${dificuldadeEscolhida}`);
        start(nome, dificuldadeEscolhida);
    
        } else {
    
        alert('Obrigado pela visita!');
    
    }
}

confirmacao();