import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class JogosUsuariosDto  {

    @ApiProperty({
        description: "Id do Jogo Agendado",
        example: 1,
    })
    @IsNotEmpty({message:"ID do Jogo Agendado precisa ser preenchido"})
    id_jogos_grupo: number;

    @ApiProperty({
        description: "Id do usuario",
        example: 1,
    })
    @IsNotEmpty({message:"ID do Usuario precisa ser preenchido"})
    id_usuario: number;

    @ApiProperty({
        description: "Booleano que confirma (true) ou desconfirma(false) presenca do jogador na partida",
        example: "true",
    })
    confirma_presenca: boolean;

    @ApiProperty({
        description: "Notas dada para cada jogador - funcionalidade ainda nao implementada",
        example: "8",
    })
   notas: string;
 }