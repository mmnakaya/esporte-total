import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import {JogosController} from './jogos.controller';
import {PrismaService} from '../../prisma.service';

@Module({imports: [],
    controllers: [JogosController],
    providers: [JogosService, PrismaService]})

export class JogosModule {}
