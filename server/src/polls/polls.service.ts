import { Injectable } from '@nestjs/common';
import { CreatePollField, JoinPollField, RejoinPollField } from './types';
import { createPollID, createUserID } from 'src/ids';

@Injectable()
export class PollService {
  async createPoll(fileds: CreatePollField) {
    const pollID = createPollID();
    const userID = createUserID();

    return {
      ...fileds,
      pollID,
      userID,
    };
  }
  async joinPoll(fileds: JoinPollField) {
    const userID = createUserID();

    return {
      ...fileds,
      userID,
    };
  }
  async rejoinPoll(fileds: RejoinPollField) {
    return fileds;
  }
}
