import { Body, Controller, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';
import { ControllerAuthGuard } from './controller-auth.guard';
import { requestWithAuth } from './types';

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
  @UseGuards(ControllerAuthGuard)
  @Post('/rejoin')
  async rejoin(@Req() request: requestWithAuth) {
    const { userID, pollID, name } = request;
    const result = await this.pollService.rejoinPoll({
      name,
      pollID,
      userID,
    });

    return result;
  }
}
