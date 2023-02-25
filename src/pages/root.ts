import Page from ".";

export default class Root extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo;
    async create(obj?: any): Promise<Zeyo>{
        return 
    };
}
