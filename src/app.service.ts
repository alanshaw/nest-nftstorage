import { Injectable } from '@nestjs/common';
import { NFTStorage, Blob } from 'nft.storage';

@Injectable()
export class AppService {
  async getHello() {
    const { cid } = await NFTStorage.encodeBlob(new Blob(['Hello World!']));
    return cid.toString();
  }
}
