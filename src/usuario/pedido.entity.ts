import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

export enum status {
  cancel = 'cancelado',
  aprovado = 'aprovado',
  processando = 'processando'
}

@Entity({ name: 'pedidos' })
export class PedidoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'valor_total', type: 'float' }) //double precision no pg
  valorTotal: number;

  @Column({ name: 'status', type: 'enum', enum: status, default: status.processando })
  status: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.pedidos)
  usuario: UsuarioEntity
}

//note que os erros sumiram