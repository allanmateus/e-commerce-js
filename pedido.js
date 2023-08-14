class Pedido {
    static pedidosCont = 0;
    constructor(valorPedido, statusPedido){
        this.id = ++this.constructor.pedidosCont;
        this.valor = valorPedido;
        this.status = statusPedido;
    }
}

listaDePedidos = [];

adicionarPedido = ((valorPedido, statusPedido) => {
    const novoPedido = new Pedido(valorPedido, statusPedido);
    listaDePedidos.push(novoPedido);
});

listarPedidosPorStatus = ((statusPedido) => {
    let pedidoPorStatus = listaDePedidos.filter((pedido) => pedido.status === statusPedido);
    for (pedidoFiltrado in pedidoPorStatus){
        console.log(`Pedido # ${pedidoFiltrado.index} - Valor: R$ ${pedidoFiltrado.VALOR}`);
    }
});

adicionarPedido(100, "Aguardando Pagamento");
adicionarPedido(150, "Enviado");
adicionarPedido(80, "Entregue");
adicionarPedido(200, "Aguardando Pagamento");


listarPedidosPorStatus("Aguardando Pagamento");




