import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import {GrupoDto} from './grupo.dto'

@Injectable()
export class GrupoService {
  constructor(private prisma: PrismaService) {}
/*
        async create(data: GrupoDto)  {

            const grupoExiste = await this.prisma.grupo.findFirst( {
                where: { nome_grupo: data.nome_grupo,
                        idCriador: data.idCriador,
                }
            }) 

            if (grupoExiste) {
                throw new Error('grupo ja existe')
            }

            const grupo = await this.prisma.grupo.create({data})
            return grupo;  
        }
  */
}