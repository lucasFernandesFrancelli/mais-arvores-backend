import { IEncoderProvider } from '../IEncoderProvider';
import { BcryptEncoderProvider } from './BcryptEncoderProvider';

describe('test bcrypt encoder provider', () => {
  let bcryptEncoderProvider: IEncoderProvider;

  beforeEach(() => {
    bcryptEncoderProvider = new BcryptEncoderProvider(8);
  });

  it('should encode a string', async () => {
    const text = '12345';
    const textHashed = await bcryptEncoderProvider.encode(text);

    expect(textHashed).not.toEqual(text);
  });

  it('should compare 2 strings', async () => {
    const text = '12345';
    const textHashed = await bcryptEncoderProvider.encode(text);
    const doesStringsMatch = await bcryptEncoderProvider.compare(
      text,
      textHashed,
    );

    expect(doesStringsMatch).toBeTruthy();
  });
});
