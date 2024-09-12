import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollService } from './polls.service';
import { PollsController } from './polls.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PollsController],
  providers: [PollService],
})
export class PollsModule {}
