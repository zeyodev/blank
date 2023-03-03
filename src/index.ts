import App from "./app";
import Root from "./pages/root";
import Route from "./router/_route";

const app = new App()
app.setRouter(new Route(app))
    .setRepository({})
    .setPages(Root)