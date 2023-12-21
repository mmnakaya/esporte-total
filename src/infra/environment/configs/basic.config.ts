import {ConfigService} from '@nestjs/config';

const configService = new ConfigService();

export default class BasicConfig {
    public static readonly DATABASE_URL = configService.get<string>('DATABASE_URL');
} 