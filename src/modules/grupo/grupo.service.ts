import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import {GrupoDto} from './grupo.dto'
import { GrupoUsuarioDto } from '../grupo-usuario/grupo-usuario.dto';

@Injectable()
export class GrupoService {
  constructor(private prisma: PrismaService) {}

        // Cria um novo grupo.
        async create(data: GrupoDto)  {
            // verifica se já existe um grupo com mesmo nome e mesmo criador. Caso já exista, retorna um erro.
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

            try {
                const grupo = await this.prisma.grupo.create({data})
                this.inserir_administrador(grupo);
                return grupo;
                }
            catch(error) {
                throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                }
        }

        async findAll(grupo: string) {
            return this.prisma.grupo.findMany({
                where: {
                    //nome_grupo: grupo,
                    nome_grupo: {
                        contains: grupo,
                        mode: 'insensitive'
                    },
                    
                },
                select: {
                    nome_grupo: true,
                },
            })
        } 
        
        // esse método insere o criador do grupo no próprio grupo que ele criou como administrador. A relação usuário - grupo é
        // inserido na tabela Grupo_Usuario.
       async inserir_administrador(grupo: any) {
        
        let data: GrupoUsuarioDto;

            data = {id_grupo : grupo.id,
                    id_usuario: grupo.id_criador,
                    eh_administrador: true,
                    }
            try {
                const jogos_usuarios = await this.prisma.grupo_Usuario.create({data});
                }
            catch(error) {
                throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                }
        }    

}