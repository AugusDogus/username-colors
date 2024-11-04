import { logger } from '@vendetta';
import { storage } from '@vendetta/plugin';
import { Settings } from './settings';
import { messagesPatch, patchMessages } from './patches/message';

export default {
  onLoad: () => {
    storage.colors = storage.colors ?? { entries: [] };
    patchMessages();
    logger.log('Username Colors plugin loaded!');
  },
  onUnload: () => {
    messagesPatch?.();
    logger.log('Username Colors plugin unloaded.');
  },
  settings: Settings,
};
