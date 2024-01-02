import { Module } from '@nestjs/common';
import { GrupoUsuarioService } from './grupo-usuario.service';
import {GrupoUsuarioController} from './grupo-usuario.controller';
import {PrismaService} from '../../prisma.service';

@Module({imports: [],
    controllers: [GrupoUsuarioController],
    providers: [GrupoUsuarioService, PrismaService]})

export class GrupoUsuarioModule {}