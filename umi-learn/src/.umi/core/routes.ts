// @ts-nocheck
import { ApplyPluginsType } from 'C:/Users/17106/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/Page1",
    "exact": true,
    "component": require('@/pages/Page1.js').default
  },
  {
    "path": "/Page2",
    "exact": true,
    "component": require('@/pages/Page2.js').default
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
