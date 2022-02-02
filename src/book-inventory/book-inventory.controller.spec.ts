import { Test, TestingModule } from '@nestjs/testing';
import { BookInventoryController } from './book-inventory.controller';

describe('BookInventoryController', () => {
  let controller: BookInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookInventoryController],
    }).compile();

    controller = module.get<BookInventoryController>(BookInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
