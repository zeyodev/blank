import { Root } from "./lib";
import Repository from "./repository";
import Route from "./route";

export default class Plugins extends Repository(Route(Root)) {}