/* Isso tera que ficar na biblioteca, pois sera a raiz do objeto App*/
export class Root {
    
    constructor(){
        
    }
}
export type ZeyoAppConstructor<T = Root> = new (...args: any[]) => T;