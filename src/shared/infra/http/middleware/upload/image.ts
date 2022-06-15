import awsStorage from '../../../../../config/aws';
import crypto from 'crypto';
import multer, { Multer } from 'multer';
import multerS3 from 'multer-s3';
import { join } from 'path';
import { S3Client } from '@aws-sdk/client-s3';

const awsStorageConfig = awsStorage();

const storageS3 = new S3Client({
  credentials: {
    accessKeyId: awsStorageConfig.AWS_ACCESS_KEY_ID,
    secretAccessKey: awsStorageConfig.AWS_SECRET_ACCESS_KEY,
  },
  region: 'us-east-1',
});

const storageTypes = {
  s3: multerS3({
    s3: storageS3 as any,
    bucket: awsStorageConfig.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      const randomBytes = crypto.randomBytes(8).toString('hex');
      const fileType = file.originalname.split('.').slice(-1)[0];
      const fileName = `${randomBytes}-${Date.now()}.${fileType}`;

      cb(null, fileName);
    },
  }),
  local: multer.diskStorage({
    destination: join(process.cwd(), 'uploads/images'),
    filename: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err, '');

        const fileType = file.originalname.split('.').slice(-1)[0];
        const key = `${hash.toString('hex')}-${Date.now()}.${fileType}`;

        cb(null, key);
      });
    },
  }),
};

/**
 * Instance of the multer middleware
 *
 * @param {number} size Size in Kilobytes, e.g 1024KB = 1 MB
 * @param {string[]} fileFormat
 * @returns {Multer}
 */
export default (size: number, fileFormat: string[]): Multer => {
  return multer({
    limits: { fileSize: size * 1024 },
    storage: storageTypes.s3,
    fileFilter: (req, file, cb) => {
      const regex = new RegExp(`\\.(${fileFormat.join('|')})$`);
      if (!file.originalname.match(regex)) {
        return cb(new Error('Please, provide a file with a valid format!'));
      }

      return cb(null, true);
    },
  });
};
