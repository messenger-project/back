import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

interface Point {
  x: number;
  y: number;
}

interface DrawLine {
  from: Point;
  to: Point;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('draw-line')
  handleDrawLine(@MessageBody() data: DrawLine) {
    this.server.emit('draw-line', data);
  }
}
