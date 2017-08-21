import { UIRouter, Category } from '@uirouter/core';
import { Visualizer } from '@uirouter/visualizer';

import { requiresAuthHook } from './auth/auth.hook';

export function RouterConfiguration(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);

  router.trace.enable(Category.TRANSITION);
  router.plugin(Visualizer);

}
