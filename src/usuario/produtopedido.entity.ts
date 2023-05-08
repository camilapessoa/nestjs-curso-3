import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'produtos_pedidos' })
export class ProdutoPedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'quantidade', nullable: false })
  quantidade: number;

  @Column({ name: 'preco_venda', type: 'float', nullable: false })
  precoVenda: number //aqui usa convenção js camel case

}

//encerrar vídeo aqui -> criação de duas entidades pedido.entity e produtopedido.entity
//temos o pedido e o produto mas agora precisamos relacionar essas duas entidades.
