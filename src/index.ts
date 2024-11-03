import { logger } from '@vendetta';
import { storage } from '@vendetta/plugin';
import { Settings } from './settings';

export default {
  onLoad: () => {
    storage.colors = storage.colors ?? { entries: [] };
    logger.log('Hello world!');
  },
  onUnload: () => {
    logger.log('Goodbye, world.');
  },
  settings: Settings,
};
