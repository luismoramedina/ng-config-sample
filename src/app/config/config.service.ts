import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable()
export class ConfigService {

  constructor() { }

  getConfig(): Config {

    return {
        backendUrl: "http://from-service/back",
        debug: false
      };
  }
}
