import { Injectable } from '@nestjs/common';
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
            console.log(jogo);
            return await this.prisma.jogos_Usuarios.findMany({
                where: {
                        id_jogos_grupo: parseInt(jogo,10),
                        
                },
                select: {
                    id_usuario : true,
                    confirma_presenca: true,
                },
            })
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