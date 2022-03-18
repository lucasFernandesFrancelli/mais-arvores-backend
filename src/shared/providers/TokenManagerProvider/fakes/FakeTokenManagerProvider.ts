import { injectable } from 'tsyringe';
import {
  IPayload,
  ISignOptions,
  ITokenManagerProvider,
} from '../ITokenManagerProvider';

@injectable()
export class FakeTokenManagerProvider implements ITokenManagerProvider {
  async sign(
    info: IPayload,
    _secret: string,
    _options: ISignOptions,
  ): Promise<string> {
    return `${JSON.stringify(info)}TOKEN`;
  }

  async verify(token: string, _secret: string): Promise<IPayload> {
    if (token.endsWith('TOKEN')) {
      return JSON.parse(token.substring(0, token.indexOf('TOKEN')));
    }
    return new Error('Invalid JWT token');
  }
}
