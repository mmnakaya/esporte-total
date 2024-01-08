import { Module } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import {GrupoController} from './grupo.controller';
import {PrismaService} from '../../prisma.service';

@Module({imports: [],
    controllers: [GrupoController],
    providers: [GrupoService, PrismaService]})

export class GrupoModule {}