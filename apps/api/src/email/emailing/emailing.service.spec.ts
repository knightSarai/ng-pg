import { Test, TestingModule } from '@nestjs/testing';
import { EmailingService } from './emailing.service';

describe('EmailingService', () => {
  let service: EmailingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailingService],
    }).compile();

    service = module.get<EmailingService>(EmailingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
