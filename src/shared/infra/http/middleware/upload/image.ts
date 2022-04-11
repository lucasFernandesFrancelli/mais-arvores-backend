import { Request } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import mime from 'mime';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';

export class UploadImage {
  private readonly URL: string;

  constructor() {
    this.URL = path.basename('uploads');
  }

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req, file, cb) => {
        if (!fs.existsSync(this.URL)) {
          fs.mkdirSync(this.URL);
        }
        cb(null, this.URL);
      },
      filename: (req, file, cb) => {
        const type = mime.extension(file.mimetype);
        const fileName = file.originalname.replace(/\s/g, '-');

        cb(null, `${fileName}-${new Date().getTime()}.${type}`);
      },
    });
  }

  private fileFilter() {
    return (
      req: Request,
      file: Express.Multer.File,
      cb: multer.FileFilterCallback,
    ) => {
      const type = mime.extension(file.mimetype);
      const conditions = ['png', 'jpg', 'jpeg'];

      if (conditions.includes(`${type}`)) {
        cb(null, true);
      }
      cb(null, false);
    };
  }

  get getConfig(): multer.Options {
    return {
      storage: this.storage(),
      fileFilter: this.fileFilter(),
    };
  }
}

export const uploadImage = new UploadImage();
