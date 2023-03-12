import Z, { Zeyo } from "zeyo"
import GetValue from "./properties/getValue"
import SetValue from "./properties/setValue"
import FormElement from "./_element"

export default class Input extends SetValue(GetValue(FormElement)) {
    constructor(label: string, placeholder: string) {
        super("text", label, placeholder)
    }
    create(key: string): Zeyo {
        this.element = Z("input").atribs({
            "id": key,
            "type": this.type
        }).atrib("placeholder", this.placeholder)
        return Z("div").class("d-grid", "gap-p").children(
            Z("label").text(this.label).atribs({"for": key}),
            this.element,
        )
    }
}