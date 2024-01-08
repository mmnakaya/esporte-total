import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { GrupoDto } from './grupo.dto';
import {GrupoService} from './grupo.service';


@Controller('grupo')
export class GrupoController {

constructor(
    private readonly grupoService: GrupoService,
  ) {}


  @Post()
  async create(@Body() Data: GrupoDto)
  {
    return this.grupoService.create(Data);
  }

  @Get(':nome_grupo' )
  async findAll(@Param('nome_grupo') nome_grupo: string){
    return this.grupoService.findAll(nome_grupo);
  }

}