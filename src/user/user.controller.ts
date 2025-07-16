import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get('contacts')
  @UseGuards(JwtAuthGuard)
  getUsers() {
    return this.service.find();
  }
}
