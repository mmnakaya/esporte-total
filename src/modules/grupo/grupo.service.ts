import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {GrupoDto} from './grupo.dto'

@Injectable()
export class GrupoService {
  constructor(private prisma: PrismaService) {}

        async create(data: GrupoDto)  {

            const grupoExiste = await this.prisma.grupo.findFirst( {
                where: { nome_grupo: data.nome_grupo,
                        id_criador: data.id_criador,
                }
            }) 

            if (grupoExiste) {
                //throw new Error('grupo ja existe')
                // ex: throw new HttpException(`Erro ao chamar API Coberturas. Status:${res.response.status} statusTexto: ${res.message}`, HttpStatus.BAD_REQUEST)})
                throw new HttpException(`Erro: grupo já existente`, HttpStatus.BAD_REQUEST)
            }

            const grupo = await this.prisma.grupo.create({data})
            return grupo;  
        }

        async findAll(grupo: string) {
            return this.prisma.grupo.findMany({
                where: {
                    //nome_grupo: grupo,
                    nome_grupo: {
                        contains: grupo,
                        //mode: 'insensitive'  //usar com postgreSQL
                    },
                    
                },
                select: {
                    nome_grupo: true,
                },
            })
        }  

}