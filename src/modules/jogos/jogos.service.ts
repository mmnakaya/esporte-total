import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {JogosDto} from './jogos.dto';
import { PrismaService } from '../../prisma.service';
import { JogosUsuariosDto } from '../jogos-usuarios/jogos-usuarios.dto';



@Injectable()
export class JogosService {
    constructor(private prisma: PrismaService) {}
        
        // criação do Jogo - refere-se ao agendamento do jogo feito pelo adm do grupo. A data e hr do jogo é guardado na tabela Jogos_Grupo 
          async create(data: JogosDto)  {
              
              data.timestamp_jogo = new Date(data.data_jogo + ' ' + data.horario_jogo + ':00 UTC');
              
              try {
                const jogo = await this.prisma.jogos_Grupo.create({data}) //Criação do Jogo na tabela Jogos_Grupo
                this.inserir_jogadores(jogo); //insere todos os jogadores do grupo nesse jogo, o que é feito na tabela Jogos_Usuarios.
                return jogo;  
                  }
               catch(error)
                  {
                    throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                  }
             
          }

          //busca de todos os jogos futuros agendados para o grupo ao qual o usuário pertence.
          async findAll(grupo: string) {

            const data_atual =  new Date;
            const data_now = Date.now();
            

            const retorno = await this.prisma.jogos_Grupo.findMany({
                where: {
                    
                        timestamp_jogo: {
                             gte: data_atual ,  //data do jogo deve ser após data atual
                        },
                        
                        id_grupo: parseInt(grupo,10),
                        
                  
                },
                select: 
                {
                    id: true ,
                    id_grupo: true  ,  
                    data_jogo: true   , 
                    horario_jogo: true,
                    timestamp_jogo: true,
                    descricao_jogo: true,
                    data_criacao: true,
                },
            })

            //console.log(retorno[0].data_jogo,retorno[0].horario_jogo)
            //console.log(retorno[1].data_jogo,retorno[1].horario_jogo)
            //const data_timestamp = new Date('2023/10/25 00:07:00 UTC');
            //console.log(data_timestamp);
            return retorno;

        }  

        // Quando o adm cria um jogo, automaticamente deve-se inserir todos os jogadores do grupo nesse jogo, o que é feito na tabela Jogos_Usuarios.
        async inserir_jogadores(jogo: any) 
        {
            const id_jogo = jogo.id

            // primeiramente busca-se todos os jogadores do respectivo Grupo na tabela Grupo_Usuario
            const jogadores_grupo = await this.prisma.grupo_Usuario.findMany({
                where: {
                        id_grupo: jogo.id_grupo,
                                      
                },
                select: 
                {
                    id_usuario: true,
                },
            })
            
            /*
            let jogador: JogosUsuariosDto;


            const inscricao_jogo = jogadores_grupo.map(adiciona_usuario) ;
            
            function adiciona_usuario(item) {

                jogador = {id_jogos_grupo : id_grupo,
                    id_usuario: item.id_usuario,
                    confirma_presenca: false,
                    notas: '0'};

                const jogos_usuarios = this.prisma.jogos_Usuarios.create({jogador});

            }
            */
            
           //let jogador: JogosUsuariosDto;
           /*
            jogador = {id_jogos_grupo : id_grupo,
                        id_usuario: 2,
                        confirma_presenca: true,
                        notas: '0'};

            console.log(id_grupo);
            console.log(jogador.id_jogos_grupo);
            */
                       
            let data: JogosUsuariosDto;          
            for (var i = 0; i < jogadores_grupo.length; i++) {
                data = {id_jogos_grupo : id_jogo,
                        id_usuario: jogadores_grupo[i].id_usuario,
                        confirma_presenca: false,
                        notas: '0'}
                
                const jogos_usuarios = await this.prisma.jogos_Usuarios.create({data});
               
            }                  
            

            /* O código abaixo pode ser usado para Postgree, porém o Create Many não funciona para o SQLite.

            function adiciona_grupo(item) {

                var usuario = {
                    id_jogos_grupo : id_grupo,
                    id_usuario : item.id_usuario,
                    notas : '0'
                }

                return usuario;
              }

            console.log(inscricao_jogo) ; 
            const createMany = await this.prisma.jogos_Usuarios.createMany({inscricao_jogo
              })
              */
        }
            
  }

