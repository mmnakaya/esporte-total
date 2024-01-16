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


@Controller('jogos')
export class JogosController {

constructor(
    private readonly jogosService: JogosService,
  ) {}


  @Post()
  async create(@Body() Data: JogosDto)
  {
    return this.jogosService.create(Data);
  }

  @Get(':id_grupo' )
  async findAll(@Param('id_grupo') id_grupo: string){
    return this.jogosService.findAll(id_grupo);
  }

  

}