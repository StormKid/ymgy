import { Test, TestingModule } from '@nestjs/testing';
import { TotalGateway } from './total.gateway';

describe('TotalGateway', () => {
  let gateway: TotalGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TotalGateway],
    }).compile();

    gateway = module.get<TotalGateway>(TotalGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
