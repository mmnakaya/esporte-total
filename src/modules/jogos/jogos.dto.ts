import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class JogosDto  {
    id: number;
    @ApiProperty({
        description: "Id do Jogo Agendado",
        example: 1,
    })
    @IsNotEmpty({message:"ID do Jogo Agendado precisa ser preenchido"})
    id_grupo: number;

    @ApiProperty({
        description: "Data do jogo precisa ser preenchido no formato YYYY-MM-DD",
        example: "2024-05-21",
    })
    @IsNotEmpty({message:"Data do Jogo precisa ser preenchido"})
    data_jogo: string;

    @ApiProperty({
        description: "Preencher no formato HH:MI",
        example: "18:00",
    })
    @IsNotEmpty({message:"Horario precisa ser preenchido"})
    horario_jogo: string;

    timestamp_jogo: any;

    @ApiProperty({
        description: "Descrição do jogo - campo não obrigatorio",
        example: "Jogo será no D.Pedro na Rua Brig...",
    })
    descricao_jogo?:string
 }