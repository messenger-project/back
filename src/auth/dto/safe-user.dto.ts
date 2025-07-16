import { Exclude } from 'class-transformer';

export class SafeUserDto {
  id: number;
  email: string;

  @Exclude()
  password?: string;
}
