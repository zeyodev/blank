import { Zeyo } from "zeyo"
import App from "../app"
/**
 * comanetario antes da classe
 */
export default abstract class Component {
    app: App
    abstract main: Zeyo
    /**
     * Comentario no construtor
     * @param app 
     */
    constructor(app: App) {
        this.app = app
    }
    abstract create(obj?: any): Promise<Zeyo>
}