import { Field } from "./field"

export default abstract class Form {
    title: string 
    data: {[key: string]: any} = {}
    fields: {[key: string]: Field} = {}
    footer: {back: string, next: string}
    controller: string
    model: any
    constructor(model: any, title: string= "", controller: string = "", footer: {back: string, next: string}= {back: "Voltar", next: "none"}){
        this.model = model
        this.title = title
        this.controller = controller
        this.footer = footer
    }
    abstract getFields(o?: any): Promise<{[key: string]: Field}>
}