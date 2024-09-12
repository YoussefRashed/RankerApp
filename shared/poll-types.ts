export interface Participants{
    [participantsID:string]:string;
}
export interface Poll{
    id:string;
    topic:string;
    votesPerVoter:number;
    adminID:string;
    participants:Participants
    // nominations:Nominations;
    // rankings:Rankings;
    // results:Results;
    //hasStarted:boolean;
}