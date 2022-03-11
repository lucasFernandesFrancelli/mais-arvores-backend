import { string } from 'joi';
import { ITokenManagerProvider } from '../ITokenManagerProvider';
import { JwtTokenManagerProvider } from './JwtTokenManagerProvider';

describe('test jwt token manager provider', () => {
  let jwtTokenManagerProvider: ITokenManagerProvider;

  beforeEach(() => {
    jwtTokenManagerProvider = new JwtTokenManagerProvider();
  });

  it('should correctly sign and verify a JWT', async () => {
    const secret = 'asofmslfmslkfmsspoiwrepowkrweo-0349234';
    const signedToken = await jwtTokenManagerProvider.sign({}, secret, {
      expiresIn: '1d',
      subject: 'my Id',
    });

    expect(typeof signedToken).toBe('string');

    const response = await jwtTokenManagerProvider.verify(signedToken, secret);

    expect(response).toEqual(expect.objectContaining({ sub: 'my Id' }));
  });

  it('should correctly verify invalid JWT', async () => {
    const secret = 'asofmslfmslkfmsspoiwrepowkrweo-0349234';
    const signedToken = await jwtTokenManagerProvider.sign({}, secret, {
      expiresIn: '1d',
      subject: 'my Id',
    });

    const invalidToken = `${signedToken}some trash`;

    await expect(
      jwtTokenManagerProvider.verify(invalidToken, secret),
    ).rejects.toEqual(new Error('Invalid JWT Token'));
  });
});
