export class Film {

    public static readonly viewed = "Просмотрено";
    public static readonly notViewed = "Не просмотрено";

    constructor() {
        this.isViewed = false;
        this.name = "";
        this.genre = "";
        this.status = Film.notViewed;
    }

    id: number;
    name: string;
    genre: string;
    status: string;
    isViewed: boolean;
}
