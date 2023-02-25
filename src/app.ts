import Page from "./pages"
type PageConstructor = new (...args: any) => Page
export default class App {
    pages: PageConstructor[]
    root: HTMLElement = document.querySelector("#root")!
    route: any// = Route
    repository: any
    constructor(pages: PageConstructor[], repository: any){
        this.pages = pages
        this.repository = repository
    }
    init(){
        this.route.init()
    }
}