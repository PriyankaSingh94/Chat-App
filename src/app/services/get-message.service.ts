import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as io from 'socket.io-client'


@Injectable()
export class GetMessageService {
  uri = 'http://localhost:3000/loans';
  _chats = [];
  _chatsub;
  socket;

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000');
    this._chatsub = new Subject<any[]>();
    this.socket.on('connect', () => { console.log('client') });
    this.socket.on('message recived', (data) => {
      this._chats.push(data);
      this._chatsub.next([...this._chats]);
    });

    this.socket.on('all messages', (data) => {
      this._chats = [...data];
      this._chatsub.next([...this._chats]);
    })

    this.socket.on('user connected', (data) => {
      this._chats.push({msg: `${data} connected`, type: 'notify'})
      this._chatsub.next([...this._chats]);
    })

    this.socket.on('user disconnected', (data) => {
      this._chats.push({msg: `${data} disconnected`, type: 'notify'})
      this._chatsub.next([...this._chats]);
    })
  }

  getChats() {
    return this._chatsub.asObservable();
  }

  getLoans() {
    return this
      .http
      .get(`${this.uri}`);
  }

  addChat(message) {
    this.socket.emit('new message', message);
  }

  addUser(user) {
    this.socket.emit('new user', user);
  }
}
