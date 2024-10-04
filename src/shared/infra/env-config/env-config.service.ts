import { Injectable } from '@nestjs/common';
import { EnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvConfigService implements EnvConfig {

  constructor(private ConfigService: ConfigService) {}

  getAppPort(): number {
    
    return Number(this.ConfigService.get<number>('PORT'));
  }
  getNodeEnv(): string {

    return String(this.ConfigService.get<string>('NODE_ENV'));
  }
}
