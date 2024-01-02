import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UsuariosDto } from './usuarios.dto';

  
@Injectable()
export class UsuariosService {
    constructor(private prisma: PrismaService) {}
    
        async create(data: UsuariosDto)  {

            const usuarioExiste = await this.prisma.usuario.findFirst( {
                where: { email: data.email,
                        
                }
            }) 

            if (usuarioExiste) {
                throw new Error('usuario ja existe')
            }

            const usuario = await this.prisma.usuario.create({data})
            return usuario;  
        }
}
