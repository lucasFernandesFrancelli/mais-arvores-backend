import { injectable } from 'tsyringe';
import { IEncoderProvider } from '../IEncoderProvider';

@injectable()
export class FakeEncoderProvider implements IEncoderProvider {
  private readonly rounds: number;

  constructor(rounds: number) {
    this.rounds = rounds;
  }

  async encode(plain: string): Promise<string> {
    return `${plain} ENCRYPTED`;
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return `${plain} ENCRYPTED` === hashed;
  }
}
