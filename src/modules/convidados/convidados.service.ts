import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {ConvidadoDto} from './convidados.dto'

@Injectable()
export class ConvidadoService {
  constructor(private prisma: PrismaService) {}

        async create(data: ConvidadoDto)  {

            const convidadoExiste = await this.prisma.convidados.findFirst( {
                where: { id_jogos_grupo: data.id_jogos_grupo,
                        nome_convidado: data.nome_convidado,
                }
            }) 

            if (convidadoExiste) {
                        throw new HttpException(`Erro: convidado já cadastrado`, HttpStatus.BAD_REQUEST)
            }

            try {
                const grupo = await this.prisma.convidados.create({data})
                return grupo;
                }
            catch(error) {
                throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                }
        }

        async findAll(jogo: string) {
            
            return await this.prisma.convidados.findMany({
                where: {
                        id_jogos_grupo: parseInt(jogo,10),
                        
                },
                select: {
                    id_usuario : true,
                    confirma_presenca: true,
                },
            })
        }  ;


        async delete(id: string) {
            
            const id_number = parseInt(id, 10);

            const convidadoExiste = await this.prisma.convidados.findUnique( {
                where: { id_usuario: id_number,
                }
            });


            if (!convidadoExiste) {
                    throw new HttpException(`Erro: Convidado não existe`, HttpStatus.BAD_REQUEST)
            };

            return await this.prisma.convidados.delete({
                where: {
                    id_usuario: id_number,
                }
            })        
        }

}