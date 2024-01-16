import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator"

export class GrupoUsuarioDto  {

    @ApiProperty({
        description: "Id do Grupo",
        example: 1,
    })
    @IsNotEmpty({message:"ID do Grupo precisa ser preenchido"})
    id_grupo: number;

    @ApiProperty({
        description: "Id do usuario",
        example: 1,
    })
    @IsNotEmpty({message:"ID Usuario precisa ser preenchido"})
    id_usuario: number;

    @ApiProperty({
        description: "Define se usuario é adm ou nao",
        example: false,
    })
    eh_administrador: boolean;
    }
