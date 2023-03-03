import Page from "./pages"
import Plugins from "./plugins"
type PageConstructor<P = Page> = new (...args: any) => P
export default class App extends Plugins {
    pages: Page[]
    root: HTMLElement = document.querySelector("#root")!
    repository: any
    constructor(){
        super()
        this.pages = []
    }

    setPages(...pages: PageConstructor[]) {
        this.pages = pages.map(p => new p(this))
    }
}