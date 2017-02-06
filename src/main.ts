// es6 shim
import 'core-js';
// es7 reflect-metadata
import 'reflect-metadata';
// async lib
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);