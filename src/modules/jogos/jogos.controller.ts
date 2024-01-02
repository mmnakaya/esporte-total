import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { JogosDto } from './jogos.dto';
import {JogosService} from './jogos.service';


@Controller()
export class JogosController {

constructor(
    private readonly jogosService: JogosService,
  ) {}


  @Post('jogos')
  async create(@Body() Data: JogosDto)
  {
    return this.jogosService.create(Data);
  }

}