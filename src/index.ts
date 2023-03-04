import {io} from "socket.io-client";

export class Messenger<MessageType, RoomType> {
    ws_url: string
    room_key: keyof RoomType

    constructor(ws_url: string, room_key: keyof RoomType) {
        this.ws_url = ws_url
        this.room_key = room_key
    }
}

export class ChatConnection {
    socket

    constructor(ws_url: string) {
        this.socket = io(ws_url)
    }


}