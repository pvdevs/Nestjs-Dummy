import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import CreateBoardDto from './dtos/createBoard.dto';
import { IBoard } from './board.interface';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async getBoard(id: number): Promise<Board> {
    return await this.boardRepository.findOneBy({ id });
  }

  async createBoard(board: CreateBoardDto): Promise<IBoard> {
    try {
      return await this.boardRepository.save(board);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateBoard(id: number, board: Partial<Board>): Promise<void> {
    await this.boardRepository.update(id, board);
  }

  async deleteBoard(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }
}
