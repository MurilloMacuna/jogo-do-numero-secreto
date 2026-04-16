    // dar boa vindas ao usuario do jogo do numero secreto
    alert ('boas vindas ao jogo do numero secreto ');
    // criar uma variavel para armazenar o numero secreto
    let numMaximo = 100;
    let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
    console.log(numeroSecreto);
    // pedir para o usuario escolher um numero entre 1 e 10
    let chute = prompt ('Escolha um numero entre 1 e 100');
    let tentativas = 1;

     // comparar o numero escolhido pelo usuario com o numero secreto
    
     console.log('Resultado da comparação:', chute == numeroSecreto);
    //enquanto chute nao for igual ao numero secreto, o jogo continua
    while (chute != numeroSecreto)  
        {
        chute =prompt (`Escolha um numero entre 1 e ${numMaximo}`);
    // se o chute for igual ao numero secreto, o usuario ganha
        if (chute == numeroSecreto){
        // while para nao continuar o jogo depois de acertar o numero secreto
        break;
        
         }else 
             {   
                if (chute > numeroSecreto)
            {
            alert(`o numero secreto eh menor que ${chute}`);
            }   
            else{
                alert(`o numero secreto eh maior que ${chute}`);
            }
            // aumentar o numero de #tentativas + tentativas +1
            tentativas++;
        }
    }
   
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
   
     alert(`Parabens voce conseguiu descobrir o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}.`);
