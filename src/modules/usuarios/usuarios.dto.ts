import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class UsuariosDto {
    @ApiProperty({
        description: "Nome do usuario",
        example: "Fulano de tal",
    })
    @IsNotEmpty({message:"Nome do usuario precisa ser preenchido"})
    nome_usuario: string;

    @ApiProperty({
        description: "CPF do usuario - enviar sem formatação e com zeros a esquerda - campo nao obrigatorio",
        example: "99999999978",
    })
    cpf?: string;

    @ApiProperty({
        description: "Email do usuario",
        example: "adfadf@gmail.com",
    })
    @IsNotEmpty({message:"Email precisa ser preenchido"})
    email: string;

    @ApiProperty({
        description: "Numero DDD no formato de 3 digitos",
        example: "041",
    })
    @IsNotEmpty({message:"Numero DDD precisa ser preenchido - enviar com 3 digitos"})
    codigo_ddd: string;

    @ApiProperty({
        description: "Numero do Telefone - enviar no formato NNNNNNNNN  - apenas digitos e sem DDD",
        example: "999999999",
    })
    @IsNotEmpty({message:"Num telefone precisa ser preenchido"})
    numero_telefone: string;
    }