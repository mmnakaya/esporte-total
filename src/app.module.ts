import { Module } from '@nestjs/common';
import { JogosUsuariosModule } from './modules/jogos-usuarios/jogos-usuarios.module';
import { AppService } from './app.service';
import {PrismaService} from './prisma.service';
import {GrupoService} from './modules/grupo/grupo.service';
import { JogosService } from './modules/jogos/jogos.service';
import { JogosController } from './modules/jogos/jogos.controller';
import { JogosModule } from './modules/jogos/jogos.module';
import {GrupoUsuarioModule} from './modules/grupo-usuario/grupo-usuario.module';
import { UsuariosService } from './modules/usuarios/usuarios.service';
import { UsuariosController } from './modules/usuarios/usuarios.controller';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { GrupoModule } from './modules/grupo/grupo.module';
import { ConvidadoModule } from './modules/convidados/convidados.module';




@Module({
  imports: [JogosModule, UsuariosModule, GrupoUsuarioModule,GrupoModule,JogosUsuariosModule, ConvidadoModule],
  controllers: [],
  providers: [AppService,  PrismaService, GrupoService],
})
export class AppModule {}
