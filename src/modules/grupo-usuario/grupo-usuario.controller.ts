import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { GrupoUsuarioDto } from './grupo-usuario.dto';
import {GrupoUsuarioService} from './grupo-usuario.service';


@Controller()
export class GrupoUsuarioController {

constructor(
    private readonly grupoUsuarioService: GrupoUsuarioService,
  ) {}


  @Post('grupoUsuario')
  async create(@Body() Data: GrupoUsuarioDto)
  {
    return this.grupoUsuarioService.create(Data);
  }

}