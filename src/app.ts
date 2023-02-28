import Page from "./pages"
import Route from "./router/_route"
type PageConstructor<P = Page> = new (...args: any) => P
export default class App {
    pages: Page[]
    root: HTMLElement = document.querySelector("#root")!
    route: Route
    repository: any
    constructor(pages: PageConstructor[], repository: any){
        this.pages = pages.map(p => new p(this))
        this.repository = repository
        this.route = new Route(this)
        this.route.init()
    }
}