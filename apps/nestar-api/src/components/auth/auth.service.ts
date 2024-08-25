import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcryptjs"
@Injectable()
export class AuthService {
  public async hashPassword(memberPassword: string): Promise<string> {
    const salt = await bcrypt.genSalt()
    return bcrypt.hash(memberPassword, salt)
  }
  public async comparePasswords(passowrd: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(passowrd, hashedPassword)
  }
}
