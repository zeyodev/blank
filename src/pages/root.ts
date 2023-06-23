import Z, { Zeyo } from "zeyo";
import Page from ".";
import CardSimple from "../component/cardSimple";
import ListaHorizontal from "../component/listaHorizontal";
import FormItem from "../features/item/form";
import Modal from "../modal";

export default class Root extends Page {
    route: string = "/"
    title?: string | undefined;
    children?: Node[] | undefined;
    auth?: string | undefined;
    params?: { [key: string]: string; } | undefined;
    main: Zeyo = Z("div");
    async create(obj?: any): Promise<Zeyo> {
        const [itens, horizontal] = new ListaHorizontal(this.app, CardSimple).watch({
            adapter: "item",
            title: "Itens",
            list: ([] as { title: string, description: string }[])
        })
        itens.list.push({ title: "Teste0", description: "Testando lista" })
        itens.list.push({ title: "Teste1", description: "Testando lista" })
        itens.list.push({ title: "Teste2", description: "Testando lista" })
        return this.main = Z("main").children(
            Z("h1").text("Inicio de tudo"),
            Z("button").text("Add").click(() =>
                Modal.show(this.app, new FormItem(this.app, { title: "", description: "" }, itens))
            ),
            await horizontal.create(itens),
        )
    }
}
