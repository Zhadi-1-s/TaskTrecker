import { Status } from "./status";

export interface Task {
    title:string;
    status:Status;
    collabs:string[]
}
