import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  //message(message: string, messageType: MessageType, position: Position, delay: number = 3, dismissOther: boolean = false) {
    message(message: string, options: Partial<AlertifyOption>){
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const msg =     alertify[options.messageType](message);
    if (options.dismissOther) {
      msg.dismissOther();
    }
  }

  dismiss() {
    alertify.dismissAll();
  }

  dismissOther() {

  }
}

export class AlertifyOption{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOther: boolean = false;
}

export enum MessageType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Message = "message",
  Notify = "notify"
}

export enum Position {
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}
