import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class GrupoDto {
  @ApiProperty({
    description: "Id Criador",
    example: 1,
  })
  @IsNotEmpty({message:"ID do Usuario"})
  id_criador: number;

   @ApiProperty({
    description: "Nome do grupo a ser criado",
    example: "kfc",
    })
    @IsNotEmpty({message:"Nome do grupo precisa ser preenchido"})
   nome_grupo: string;

   @ApiProperty({
    description: "Descrição do grupo a ser criado",
    example: "Jogos de quarta feira as 1800",
    })
    @IsNotEmpty({message:"Descricao grupo precisa ser preenchido"})
   descricao_grupo: string;
   }