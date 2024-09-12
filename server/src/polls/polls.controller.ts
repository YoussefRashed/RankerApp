import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
  private readonly logger = new Logger(PollsController.name);
  constructor(private pollService: PollsService) {}
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    this.logger.debug('hello from controller');
    const result = await this.pollService.createPoll(createPollDto);
    return result;
  }
  @Post('/join')
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollService.joinPoll(joinPollDto);
    return result;
  }
  @Post('/rejoin')
  async rejoin() {
    const result = await this.pollService.rejoinPoll({
      name: 'from token',
      pollID: 'AlsoFromToken',
      userID: 'Guess where this come from ?',
    });
    return result;
  }
}
