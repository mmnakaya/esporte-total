import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { User as UserModel, Post as PostModel } from '@prisma/client';
import { JogosUsuariosDto } from './jogos-usuarios.dto';
import {JogosUsuariosService} from './jogos-usuarios.service';


@Controller('jogosusuarios')
export class JogosUsuariosController {

constructor(
    private readonly jogosUsuariosService: JogosUsuariosService,
  ) {}

  @Post()
  async create(@Body() Data: JogosUsuariosDto)
  {
    return this.jogosUsuariosService.create(Data);
  }

 
  @Get(':id_jogo' )
  async findAll(@Param('id_jogo') id_jogo: string){
    return this.jogosUsuariosService.findAll(id_jogo);
  }
  

  @Put('/:id_jogo/:id_usuario/:confirma_presenca')
  async confirmaJogador(@Param('id_jogo') id_jogo: string, @Param('id_usuario') id_usuario: string, @Param('confirma_presenca') confirma_presenca: string) {
    return this.jogosUsuariosService.update(id_jogo, id_usuario, confirma_presenca);
  }

  @Delete(':id_usuario')
  async deleteJogador(@Param('id_usuario') id_usuario: string) {
    return this.jogosUsuariosService.delete(id_usuario);
  }
}