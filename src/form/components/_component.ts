import Controllers from "../../interface/controller/_list"
import Z, { Zeyo } from "zeyo"
import Modal from "../../modal"
import FormElement from "./_element"
import { Field } from "../field"
import Form from ".."

export default class ComponentForm {
    main: Zeyo = Z("form")
    properties: { [key: string]: FormElement } = {}
    fields: { [key: string]: Field } = {}
    async create(form: Form) {
        this.properties = {}
        this.fields = await form.getFields()
        console.log(this.fields)
        return this.main = Z("form").class("d-grid", "gap-m", "ac-between").children(
            Z("div").class("d-grid", "gap-m","o-auto").children(
                Z("h2").object(e => e.element.innerText = form.title),
                ...Object.keys(this.fields).map(k => {
                    console.log(this.fields[k])
                    const z = this.fields[k].create(k)
                    this.fields[k].setValue(form.model[k])
                    this.fields[k].element.element.id = k
                    return z
                })
            ),
            Z("div").class("footer").children(
                ...((): Zeyo[] => {
                    const footer: Zeyo[] = []
                    if (form.footer.back !== "none")
                        footer.push(Z("button").text(form.footer.back).click(() => {
                            console.log("aqui tem que voltar no modal");
                            Modal.back()
                        }).class("aux").atrib("type", "button"))

                    if (form.footer.next !== "none")
                        footer.push(Z("button").text(form.footer.next))
                    return footer
                })()
            )
        ).object(z => z.element.onsubmit = e => {
            e.preventDefault()
            console.log(this.properties)
            console.log(this.fields)
            for (const key in this.fields) {
                if (Object.prototype.hasOwnProperty.call(form.model, key))
                    form.model[key] = this.fields[key].getValue() //isso tem que mudar e retornar fields como na linha de baixo
                else form.data[key] = this.fields[key].getValue()
            }
            form.fields = this.fields
            console.log(form);
            console.log(Controllers.list);
            console.log(Controllers.list[form.controller]);
            /* TODO: tenho que desacoplar o form do controller, deixar para o objeto form decidir  */
            new Controllers.list[form.controller]({}).execute(form)
        })

    }
}