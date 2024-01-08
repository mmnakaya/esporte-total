import { Injectable } from '@nestjs/common';
import {JogosDto} from './jogos.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class JogosService {
    constructor(private prisma: PrismaService) {}
  
          async create(data: JogosDto)  {
              
              data.timestamp_jogo = new Date(data.data_jogo + ' ' + data.horario_jogo + ':00 UTC');
              console.log(data.timestamp_jogo);

              const jogo = await this.prisma.jogos_Grupo.create({data})
              return jogo;  
          }

          async findAll(grupo: string) {

            const data_atual = Date.now();

            console.log(data_atual);
            
            const retorno = await this.prisma.jogos_Grupo.findMany({
                where: {
                        id_grupo: parseInt(grupo,10),
                        /*    
                        timestamp_jogo: {
                             gte: data_atual   //data do jogo deve ser após data atual
                        }]
                        */
                  
                },
                select: 
                {
                    id: true ,
                    id_grupo: true  ,  
                    data_jogo: true   , 
                    horario_jogo: true,
                    //timestamp_jogo: true,
                    descricao_jogo: true,
                },
            })

            //console.log(retorno[0].data_jogo,retorno[0].horario_jogo)
            //console.log(retorno[1].data_jogo,retorno[1].horario_jogo)
            //const data_timestamp = new Date('2023/10/25 00:07:00 UTC');
            //console.log(data_timestamp);
            return retorno;

        }  


  }

