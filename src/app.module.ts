import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import {PostService} from './post.service';
import {PrismaService} from './prisma.service';
import {GrupoService} from './grupo.service';
import { JogosService } from './modules/jogos/jogos.service';
import { JogosController } from './modules/jogos/jogos.controller';
import { JogosModule } from './modules/jogos/jogos.module';
import {GrupoUsuarioModule} from './modules/grupo-usuario/grupo-usuario.module';
import { UsuariosService } from './modules/usuarios/usuarios.service';
import { UsuariosController } from './modules/usuarios/usuarios.controller';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@Module({
  imports: [JogosModule, UsuariosModule, GrupoUsuarioModule],
  controllers: [AppController],
  providers: [AppService, UserService, PrismaService, PostService, GrupoService],
})
export class AppModule {}
