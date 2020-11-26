// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/17106/Desktop/react/umi-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/counter",
        "exact": true,
        "component": require('@/pages/counter.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/Login",
        "exact": true,
        "component": require('@/pages/Login.js').default
      },
      {
        "path": "/Welcome",
        "exact": true,
        "component": require('@/pages/Welcome.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
