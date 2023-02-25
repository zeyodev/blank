import Z, { Zeyo } from "zeyo";
import Page from ".";

export default class Root extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo = Z("div");
    async create(obj?: any): Promise<Zeyo> {
        return this.main = Z("main").children(
            Z("h1").text("Inicio de tudo")
        )
    }
}
