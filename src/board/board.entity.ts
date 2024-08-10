import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IBoard } from './board.interface';

@Entity('board')
export class Board implements IBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  message: string;
}
