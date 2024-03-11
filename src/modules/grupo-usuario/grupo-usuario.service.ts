import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {GrupoUsuarioDto} from './grupo-usuario.dto';
import { PrismaService } from '../../prisma.service';


@Injectable()
export class GrupoUsuarioService {
    constructor(private prisma: PrismaService) {}
  
          async create(data: GrupoUsuarioDto)  {

              try {
                const grupo = await this.prisma.grupo_Usuario.create({data})
                return grupo;
                 }
              catch(error) {
                throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
              }
          }

          async delete(id_grupo:string, id_usuario:string) {
                        
            const id_grupo_number = parseInt(id_grupo);
            const id_usuario_number = parseInt(id_usuario);

                      
            const result = await this.prisma.$queryRaw`delete from esporte."Grupo_Usuario"
            where id_grupo = ${id_grupo_number}
            and id_usuario = ${id_usuario_number}`

            return result;
                    
          }
          
  }
