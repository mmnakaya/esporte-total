import { Injectable } from '@nestjs/common';
import {GrupoUsuarioDto} from './grupo-usuario.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class GrupoUsuarioService {
    constructor(private prisma: PrismaService) {}
  
          async create(data: GrupoUsuarioDto)  {
              const grupo = await this.prisma.grupo_Usuario.create({data})
              return grupo;  
          }
  }
