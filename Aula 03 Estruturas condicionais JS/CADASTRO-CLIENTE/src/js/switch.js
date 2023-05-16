// Estruturas Condicionais: Switch Case,
// com ele nos mapeamos as estruturas condicionais
// que sejam exclusivamente com 
// condição de escopo mutuamente exclusivo,
// ou seja, muito parecido com o if e else e o encadeamento
// que ele executa

let metodo = "Dinheiro"

switch (metodo) {
    case "Dinheiro":
        alert("Pagamento em dinheiro")
        break;

    case "Cartão de Débito":
        alert("Pagamento em cartão de débito")
        break;

    case "Cartão de Crédito":
        alert("Pagamento em cartão de crédito")
        break;

    case "Cheque":
        alert("Pagamento por cheque")
        break;


    case "Carnë":
        alert("Pagamento por carnë")
        break;

    case "Vale Alimentação":
        alert("Pagamento por vale alimentação")
        break;

    default:
        alert("Opção de pagamento inválida")
        break;
}