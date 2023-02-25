import Page from "./pages"

export default class App {
    pages: Page[]
    root: HTMLElement = document.querySelector("#root")!
    route: any// = Route
    repository: any
    constructor(pages: Page[], repository: any){
        this.pages = pages
        this.repository = repository
    }
    init(){
        this.route.init()
    }
}