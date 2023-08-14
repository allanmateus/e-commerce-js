
// Criando a classe de Pedidos
class Pedido {
    // Criando um atributo estático que auto incrementa a cada instância criada.
    static pedidosCont = 0;
    constructor(valorPedido, statusPedido){
        this.id = ++Pedido.pedidosCont;
        this.valor = valorPedido;
        this.status = statusPedido;
    }
}


listaDePedidos = [];

// Criando as arrow functions 

adicionarPedido = ((valorPedido, statusPedido) => {
    let novoPedido = new Pedido(valorPedido, statusPedido);
    listaDePedidos.push(novoPedido);
});

listarPedidosPorStatus = ((statusPedido) => {
    let pedidoPorStatus = listaDePedidos.filter((pedido) => pedido.status === statusPedido);
    for ( pedidoFiltrado of pedidoPorStatus ){
        console.log(`Pedido # ${pedidoFiltrado.id} - Valor: R$ ${pedidoFiltrado.valor.toFixed(2)}`);
    }
});

calcularTotalDePedidos = (() =>{
    let totalPedidos = listaDePedidos.reduce((soma, object) => soma + object.valor,0);

    console.log(`Total de pedidos: R$ ${totalPedidos.toFixed(2)}`);
});

atualizarStatus = ((statusAtualizado) => {
    for (let i = 0; i < listaDePedidos.length; i++){
        if (listaDePedidos[i] === pedidoParaAtualizar){
            listaDePedidos[i].status = statusAtualizado
        };
    };
});

adicionarPedido(100, "Aguardando Pagamento");
adicionarPedido(150, "Enviado");
adicionarPedido(80, "Entregue");
adicionarPedido(200, "Aguardando Pagamento");

listarPedidosPorStatus("Aguardando Pagamento");

const pedidoParaAtualizar = listaDePedidos[0];
pedidoParaAtualizar.atualizarStatus("Pago");

calcularTotalDePedidos();


