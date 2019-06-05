import { Component } from '@angular/core';
import { GetMessageService } from "./services/get-message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetMessageService]
})
export class AppComponent {
  title = 'Chat';
  username;
  user;
  message = '';
  chats = [];

  constructor(private getMessageService: GetMessageService) {
    this.getMessageService.getChats().subscribe((data) => {
      this.chats = data;
      window.setInterval(() => {
        const elem = document.getElementById('scrollDiv');
        if (elem)
          elem.scrollTop = elem.scrollHeight;
      }, 500);
    })
  }

  addChat() {
    if (this.message.length == 0)
      return;
    this.getMessageService.addChat(this.message);
    this.message = '';

    window.setInterval(() => {
      const elem = document.getElementById('scrollDiv');
      if (elem)
        elem.scrollTop = elem.scrollHeight;
    }, 500);
  }

  addUser() {
    this.getMessageService.addUser(this.user);
    this.username = this.user;
  }
}
