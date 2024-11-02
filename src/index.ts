import { logger } from '@vendetta';
import { Settings } from './settings';

export default {
  onLoad: () => {
    logger.log('Hello world!');
  },
  onUnload: () => {
    logger.log('Goodbye, world.');
  },
  settings: Settings,
};
