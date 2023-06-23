import Repository from ".";
import { Socket } from "socket.io-client"

export default class RepositorySocket implements Repository {
    socket: Socket
    constructor(socket: Socket) {
        this.socket = socket
    }

    msgId() {
        return new Array(25).join("0").replace(/[018]/g, (c: any) =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(24)
        );
    }

    async create(collection: string, value: any): Promise<[any, boolean]> {
        const event = `db/create/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, value)
        return await this.socket.wait(event)
    }

    async read(collection: string, id: string): Promise<[any, boolean]> {
        const event = `db/read/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, id)
        return await this.socket.wait(event)
    }

    async update(collection: string, id: string, value: any): Promise<[any, boolean]> {
        const event = `db/update/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, { id, value })
        return await this.socket.wait(event)
    }

    async updateMany(collection: string, query: any, value: any): Promise<[any, boolean]> {
        const event = `db/updatemany/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, { query, value })
        return await this.socket.wait(event)
    }

    async updateQuery(collection: string, query: any, value: any): Promise<[any, boolean]> {
        const event = `db/updatequery/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, { query, value })
        return await this.socket.wait(event)
    }
    async delete(collection: string, id: string): Promise<[any, boolean]> {
        const event = `db/delete/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, id)
        return await this.socket.wait(event)
    }

    async deleteUsecase(collection: string, query: any): Promise<[any, boolean]> {
        const event = `db/deleteusecase/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, query)
        return await this.socket.wait(event)
    }

    async deleteMany(collection: string, query: any): Promise<[any, boolean]> {
        const event = `db/deletemany/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, query)
        return await this.socket.wait(event)
    }

    async deleteList(collection: string, id: string[]): Promise<[any, boolean]> {
        const event = `db/deletelist/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, id)
        return await this.socket.wait(event)
    }

    async findMany(collection: string, query: { [index: string]: any }): Promise<[any, boolean]> {
        const event = `db/findMany/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, query)
        return await this.socket.wait(event)
    }
    
    async findManySortLimit(collection: string, query: { [index: string]: any; }, limit: number, sort: 1 | -1): Promise<[Array<any>, boolean]> {
        const event = `db/findManySortLimit/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, {
            query,
            limit,
            sort
        })
        return await this.socket.wait(event)
    }

    async findOne(collection: string, query: { [index: string]: any }): Promise<[any, boolean]> {
        const event = `db/findOne/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, query)
        return await this.socket.wait(event)
    }
    
    async findUseCase(collection: string, args: any): Promise<[any, boolean]> {
        const event = `db/findUseCase/${collection}/${this.msgId()}`
        await this.socket.waitSocket()
        this.socket.emit(event, args)
        return await this.socket.wait(event)
    }
}