import Form from "../../form";
import { Build, Field } from "../../form/field";

export default class FormItem extends Form {
    model: any;
    lista: any
    constructor(/* repository: Repository,  */model: any, lista: any) {
        super(model, "Criar Página", "createitem", {back: "none", next: "Criar"})
        this.model = model
        this.lista = lista
    }
    async getFields(): Promise<{ [key: string]: Field }> {
        return {
            "title": Build.field("text", "Título", "Estou super empolgado"),
            "description": Build.field("text", "Descricão", "Para aprender muito mais sobre o encrivel framework da Zeyo"),
        }
    }
}