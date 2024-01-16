import { Module } from '@nestjs/common';
import { JogosUsuariosService } from './jogos-usuarios.service';
import {JogosUsuariosController} from './jogos-usuarios.controller';
import {PrismaService} from '../../prisma.service';

@Module({imports: [],
    controllers: [JogosUsuariosController],
    providers: [JogosUsuariosService, PrismaService]})

export class JogosUsuariosModule {}