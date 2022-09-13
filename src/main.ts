import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { getSchema } from 'package-for-dave';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use('/', (req, res, next) => {
    const schema = getSchema('eh', 'latest');

    res.send('HEY');
  });

  await app.listen(3000);
}
bootstrap();
