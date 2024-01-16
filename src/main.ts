import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe , BadRequestException ,HttpException,HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from './infra/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      const result = errors.map((error) => ({
        property: error.property,
        message: error.constraints[Object.keys(error.constraints)[0]],
      }));
      throw new HttpException(`Requisição com formato incorreto. Verificar: ${JSON.stringify(result)}`, HttpStatus.BAD_REQUEST);
            
    },
    stopAtFirstError: true}));


  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Gerenciamento de Jogos')
  .setDescription('Aplicação que permite agendamento de jogos e controle de jogadores que participarão do jogo')
  .setVersion('1.0')
  .addTag('jogo')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
