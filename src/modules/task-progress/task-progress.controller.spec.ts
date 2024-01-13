import { Test, TestingModule } from '@nestjs/testing';
import { TaskProgressController } from './task-progress.controller';

describe('TaskProgressController', () => {
  let controller: TaskProgressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskProgressController],
    }).compile();

    controller = module.get<TaskProgressController>(TaskProgressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
