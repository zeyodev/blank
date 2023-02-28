import Component from "../component"

export default abstract class Page extends Component {
    abstract route: string
    abstract title?: string
    abstract children?: Array<Node>
    abstract auth?: string
    abstract params?: { [key: string]: string }
}