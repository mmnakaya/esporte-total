import { Test, TestingModule } from '@nestjs/testing';
import { JogosController } from './jogos.controller';

describe('JogosController', () => {
  let controller: JogosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JogosController],
    }).compile();

    controller = module.get<JogosController>(JogosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
