import { Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete } from '@nestjs/common';
import { UsuariosDto } from './usuarios.dto';
import {UsuariosService} from './usuarios.service';

@Controller()

export class UsuariosController {

    constructor(
        private readonly usuariosService: UsuariosService,
      ) {}
    
    
      @Post('usuarios')
      async create(@Body() Data: UsuariosDto)
      {
        return this.usuariosService.create(Data);
      }
    
    }