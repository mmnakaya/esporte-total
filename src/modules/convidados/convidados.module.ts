import { Module } from '@nestjs/common';
import { ConvidadoService } from './convidados.service';
import {ConvidadoController} from './convidados.controller';
import {PrismaService} from '../../prisma.service';

@Module({imports: [],
    controllers: [ConvidadoController],
    providers: [ConvidadoService, PrismaService]})

export class ConvidadoModule {}