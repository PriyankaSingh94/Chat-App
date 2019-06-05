# Chat App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

# Chat Technical Discussion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
It is a mean stack app.I have used web sockets to create communication between two clients.

1. At the beginning we will create one socket instance using and will establish a connection =>  
this.socket =io('http://localhost:3000');

2.Then one Subject instance will be created => this._chatsub = new Subject<any[]>(); So that all subscribers will be getting the messages.

3. Initially 'new user' event will be emitted from client and in response 'all messages' will be emitted from server

4.After entering message 'new message' event will be emitted and server will emit 'message recived'

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


