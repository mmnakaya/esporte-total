import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {GrupoUsuarioDto} from './grupo-usuario.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class GrupoUsuarioService {
    constructor(private prisma: PrismaService) {}
  
          async create(data: GrupoUsuarioDto)  {
              const grupo = await this.prisma.grupo_Usuario.create({data})
              return grupo;  
          }

          async delete(id_grupo:number, id_usuario:number) {
            const grupo_usuario_existe = await this.prisma.grupo_Usuario.findUnique({
                where: {
                    Grupo_Usuario_Id: {
                    id_grupo:1,
                    id_usuario:1,
                    }
                }
            });
            if (!grupo_usuario_existe) {
                //throw new Error('grupo existente') 
                throw new HttpException(`Erro: grupo/usuario já existente`, HttpStatus.BAD_REQUEST)
            }

            return await this.prisma.grupo_Usuario.delete({
                where: {Grupo_Usuario_Id: 
                            { 
                            id_grupo:1,
                            id_usuario:1,  
                            }
                        }
            })
          }
  }
