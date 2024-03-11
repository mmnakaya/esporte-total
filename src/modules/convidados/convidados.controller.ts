import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { ConvidadoDto } from './convidados.dto';
import {ConvidadoService} from './convidados.service';


@Controller('convidado')
export class ConvidadoController {

constructor(
    private readonly convidadoService: ConvidadoService,
  ) {}


  @Post()
  async create(@Body() Data: ConvidadoDto)
  {
    return this.convidadoService.create(Data);
  }

  @Get(':id_jogo' )
  async findAll(@Param('id_jogo') id_jogo: string){
    return this.convidadoService.findAll(id_jogo);
  }

  @Delete(':id_usuario' )
  async delete(@Param('id_usuario') id_usuario: string){
    return this.convidadoService.delete(id_usuario);
  }

}