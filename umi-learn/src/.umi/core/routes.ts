// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/17106/Desktop/react/umi-learn/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('C:/Users/17106/Desktop/react/umi-learn/src/layouts/index').default,
    "exact": false,
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/17106/Desktop/react/umi-learn/src/pages/index').default,
        "title": "首页",
        "exact": true
      },
      {
        "path": "/login",
        "component": require('C:/Users/17106/Desktop/react/umi-learn/src/pages/Login').default,
        "title": "登录页",
        "exact": true
      },
      {
        "path": "/welcome",
        "component": require('C:/Users/17106/Desktop/react/umi-learn/src/pages/Welcome').default,
        "title": "欢迎页",
        "wrappers": [require('@/routes/PrivateRoute').default],
        "exact": true
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
