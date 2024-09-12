import { Body, Controller, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollService } from './polls.service';

@Controller('polls')
export class PollsController {
  constructor(private pollService: PollService) {}
  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
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
