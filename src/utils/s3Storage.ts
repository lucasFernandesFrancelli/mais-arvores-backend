import aws, { S3 } from 'aws-sdk';
import path from 'path';
import mime from 'mime';
import fs from 'fs';

const directory = path.basename('uploads');

export default class s3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  async saveImage(filename: string): Promise<void> {
    const originalPath = path.resolve(directory, filename);

    const ContentType = mime.default_type;

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    this.client
      .putObject({
        Bucket: 'maisarvores',
        Key: filename,

        Body: fileContent,
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);
  }
}
