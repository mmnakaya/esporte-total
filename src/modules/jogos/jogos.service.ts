import { Injectable } from '@nestjs/common';
import {JogosDto} from './jogos.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class JogosService {
    constructor(private prisma: PrismaService) {}
  
          async create(data: JogosDto)  {
              const jogo = await this.prisma.jogos.create({data})
              return jogo;  
          }
  }

