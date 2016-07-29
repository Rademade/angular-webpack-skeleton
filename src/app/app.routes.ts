import {WebpackAsyncRoute} from '@angularclass/webpack-toolkit';
import {RouterConfig} from '@angular/router';

import {Public} from './pages/public';
import {PublicHome} from './pages/public/home';
import {PublicAbout} from './pages/public/about';

export const routes:RouterConfig = [

  // routes for Public
  {
    path: '',
    component: Public,
    children: [ {
        path: '',
        component: PublicHome
      },
      {
        path: 'about',
        component: PublicAbout
      }
    ]
  }
];

export const asyncRoutes:AsyncRoutes = {
  // routes for public
  'Public': require('es6-promise-loader!./pages/public'),
  'PublicHome': require('es6-promise-loader!./pages/public/home'),
  'PublicAbout': require('es6-promise-loader!./pages/public/about')

};

export const prefetchRouteCallbacks:Array<IdleCallbacks> = [
  // routes for public
  asyncRoutes['Public'],
  asyncRoutes['PublicHome'],
  asyncRoutes['PublicAbout']

];
