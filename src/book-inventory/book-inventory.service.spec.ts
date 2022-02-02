import { Test, TestingModule } from '@nestjs/testing';
import { BookInventoryService } from './book-inventory.service';

describe('BookInventoryService', () => {
  let service: BookInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookInventoryService],
    }).compile();

    service = module.get<BookInventoryService>(BookInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
