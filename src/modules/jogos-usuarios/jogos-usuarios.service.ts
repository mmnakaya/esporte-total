import { Injectable, HttpException,HttpStatus } from '@nestjs/common';
import {JogosUsuariosDto} from '../jogos-usuarios/jogos-usuarios.dto';
import { PrismaService } from '../../prisma.service';



@Injectable()
export class JogosUsuariosService {
    constructor(private prisma: PrismaService) {}
        
        // inserção de convidados na tabela de Jogos_Usuarios (este jogador não precisa estar cadastrado no Grupo) 
          async create(data: JogosUsuariosDto)  {
                                         
              const jogosUsuarios = await this.prisma.jogos_Usuarios.create({data})

              return jogosUsuarios;  
          }

          async findAll(jogo: string) {
            
            const jogo_id_int = parseInt(jogo,10);  //precisa transformar em inteiro para que a query abaixo funcione.

            // A query abaixo retorna os jogadores do respectivo grupo (que estão na tabela "Jogos_Usuarios") mais os convidados 
            // para a partida (que estão na tabela "Convidados").
            // Utilizamos uma Raw query a fim de realizar um Union e o Join entre as diversas tabelas envolvidas, funções nao possíveis de realizar usando as
            // as funções prontas do Prisma.
            try{
                const result = await this.prisma.$queryRaw`SELECT b.nome_usuario , a.id_usuario, a.confirma_presenca, a.status_jogador
                FROM esporte."Jogos_Usuarios" a join esporte."Usuario" b
                on a.id_usuario = b.id
                where a.id_jogos_grupo = ${jogo_id_int}
                union
                SELECT nome_convidado, id_usuario,  confirma_presenca, status_jogador
                FROM esporte."Convidados"
                where id_jogos_grupo = ${jogo_id_int}`
                return result;
                }
            catch(error) 
                 {
                    throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                 }

            /*
            return await this.prisma.jogos_Usuarios.findMany({
                where: {
                        id_jogos_grupo: parseInt(jogo,10),
                        
                },
                select: {
                    id_usuario : true,
                    confirma_presenca: true,
                },
            })
            */



        }  ;

        async update(id_jogo, id_usuario, confirma_presenca)   {
            
            let presenca : boolean;
            if (confirma_presenca === 'true') {presenca = true} else {presenca = false} ;
            
            return await this.prisma.jogos_Usuarios.updateMany({ 
                where: {
                    id_jogos_grupo : parseInt(id_jogo,10),
                    id_usuario: parseInt(id_usuario,10),
                   
                } ,
                data: {
                    confirma_presenca: presenca,
                  },
            });
        }

        async delete(id)   {
            return await this.prisma.jogos_Usuarios.deleteMany({ 
                where: {
                    id_jogos_grupo: 1,
                    id_usuario:parseInt(id,10),
                } 
            });
        }
}