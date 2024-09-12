import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollService } from './polls.service';
import { PollsController } from './polls.controller';
import { redisModule } from 'src/modules.config';

@Module({
  imports: [ConfigModule, redisModule],
  controllers: [PollsController],
  providers: [PollService],
})
export class PollsModule {}
