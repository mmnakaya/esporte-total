import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
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
           
            
            try {
                const usuario = await this.prisma.usuario.create({data})
                return usuario;
                 }
            catch(error) 
                 {
                    throw new HttpException(error, HttpStatus.UNPROCESSABLE_ENTITY);
                 }
                 

        }

        async delete(id)   {
            return await this.prisma.usuario.delete({ 
                where: {
                    id
                } 
            });
        }
}
