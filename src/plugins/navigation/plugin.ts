import App from "../../app";
import Navigation from ".";
import { Childrens } from "./state";
import Root from "../../states/_root";
import { ZeyoAppConstructor } from "../lib";

export default function NavigationPlugin<Base extends ZeyoAppConstructor>(base: Base) {
    return class extends base {
        navigation: Navigation = new Navigation(new Root({}))
        setNavgation(childrens: Childrens, rootPage: any, app: App) {
            this.navigation = new Navigation(new Root(rootPage));
            this.navigation.setPage(app)
            window.onpopstate = e => {
                e.preventDefault()
                console.log("entro aqui", window.location.hash, app.hash.on)
                if(window.location.hash) return
                if(app.hash.on) {
                    app.hash.on = false
                    app.hash.remove()
                    if(!app.hash.back) return 
                }
                if (this.navigation.state.forward && e.state && this.navigation.state.forward.name === e.state.name)
                    this.navigation.forward(app)
                else this.navigation.back(true, app)
            }
            if(!window.location.pathname.endsWith("/")) window.location.pathname = window.location.pathname + "/"
            const pathname = window.location.pathname.substring(1).split('/')
            if (pathname.length === 1) this.navigation.setPage(app)
            else {
                window.history.replaceState({ name: "root" }, "", "/")
                this.navigation.read(pathname, app)
            }
            return this
        }
    }
}