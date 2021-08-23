

export interface ITask {
    id: number;
    title: string,
    task: string
}
interface TaskParams {
    id: number;
    title: string,
    task: string

}
export class Task {

    id: number;
    title: string;
    task: string;


    constructor({ id, title, task }: TaskParams) {
        this.id = id;
        this.task = task;
        this.title = title;

    }
}