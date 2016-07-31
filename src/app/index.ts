var files = require.context('../assets/images/sprite', false, /\.svg$/);
files.keys().forEach(files);

require('../assets/fonts/fonts.js');
require('./services/mobile-detect.js');

// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];