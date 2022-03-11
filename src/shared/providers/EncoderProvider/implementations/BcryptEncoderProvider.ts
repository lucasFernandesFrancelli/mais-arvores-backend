import { IEncoderProvider } from '../IEncoderProvider';
import bcrypt, { hash } from 'bcryptjs';
import { injectable } from 'tsyringe';

@injectable()
export class BcryptEncoderProvider implements IEncoderProvider {
  private readonly rounds: number;

  constructor(rounds: number) {
    this.rounds = rounds;
  }

  encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
