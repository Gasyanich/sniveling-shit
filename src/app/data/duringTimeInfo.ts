export class DuringTimeInfo {
    hour: number;
    minute: number;
    second: number;

    minuteStr: string;
    secondStr: string;

    constructor() {

    }

    public getMinute(): string {
        return this.minute < 10 ? "0" + this.minute.toString() : this.minute.toString();
    }

    public getSecond(): string {
        return this.second < 10 ? "0" + this.second.toString() : this.second.toString();
    }

}

