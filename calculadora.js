function calculadora() {

     const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Resto (%)\n 6 - Potenciação (**) '));

     if (7 > operacao > 0) {
          
          let num1 = Number(prompt('Digite o primeiro número:'));
          let num2 = Number(prompt('Digite o segundo número:'));
          let resultado;

          if (!num1 || !num2) {
               alert('Erro - Parâmetros inválidos')
               calculadora();
          } else {
               function soma() {
                    resultado = num1 + num2;
                    alert(`${num1} + ${num2} = ${resultado}`);
                    novaOperacao();
               }

               function sub() {
                    resultado = num1 - num2;
                    alert(`${num1} - ${num2} = ${resultado}`);
                    novaOperacao();
               }

               function multi() {
                    resultado = num1 * num2;
                    alert(`${num1} * ${num2} = ${resultado}`);
                    novaOperacao();
               }

               function div() {
                    resultado = num1 / num2;
                    alert(`${num1} / ${num2} = ${resultado}`);
                    novaOperacao();
               }

               function resto() {
                    resultado = num1 % num2;
                    alert(`O resto da divisão entre ${num1} e ${num2} é igual a ${resultado}`);
                    novaOperacao();
               }

               function pot() {
                    resultado = num1 ** num2;
                    alert(`${num1} elevado a ${num2} é igual a ${resultado}`);
                    novaOperacao();
               }
               /*
                    if(operacao == 1){
                         soma();
                    }else if(operacao == 2){
                         sub();
                    }else if(operacao == 3){
                         multi();
                    }else if(operacao == 4){
                         div();
                    }else if(operacao == 5){
                         resto();
                    }else if(operacao == 6){
                         pot();
                    }else{
                         alert('Operação inválida');
                    } 
               */
               switch (operacao) {
                    case 1:
                         soma();
                         break;
                    case 2:
                         sub();
                         break;
                    case 3:
                         multi();
                         break;
                    case 4:
                         div();
                         break;
                    case 5:
                         resto();
                         break;
                    case 6:
                         pot();
                         break;
                    default:
                         alert('Operação inválida');
                         break;
               }

               function novaOperacao() {
                    let nova = prompt('Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não');
                    if (nova == 1) {
                         calculadora();
                    } else if (nova == 2) {
                         alert('Até mais!');
                    } else {
                         alert('Digite uma opção válida');
                         novaOperacao();
                    }
               }
          }
     } else {
          alert('Erro - Operação inválida')
          calculadora();
     }

}

calculadora();


