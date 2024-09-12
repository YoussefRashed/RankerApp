export class CreatePollField {
  topic: string;
  votesPerVoters: number;
  name: string;
}

export class JoinPollField {
  pollID: string;
  name: string;
}
export class RejoinPollField {
  pollID: string;
  userID: string;
  name: string;
}
