import { findByName, findByProps } from '@vendetta/metro';

export const modalCloseButton =
  findByProps('getRenderCloseButton')?.getRenderCloseButton ??
  findByProps('getHeaderCloseButton')?.getHeaderCloseButton;

export const Navigator =
  findByName('Navigator') ?? findByProps('Navigator')?.Navigator;

export const { popModal, pushModal } = findByProps('popModal', 'pushModal');
