import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import CreateBoardDto from './dtos/createBoard.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  @Get('/')
  async getBoards() {
    const boards = await this.boardService.getBoards();
    console.log(boards);
    return;
  }

  @Post()
  async createBoards(@Body() dto: CreateBoardDto) {
    console.log(dto);
    const createdBoard = await this.boardService.createBoard(dto);
    console.log(createdBoard);
    return createdBoard;
  }
}
