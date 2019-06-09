import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {ServerComponent} from './servers/server/server.component';
import {ServersComponent} from './servers/servers.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {UserComponent} from './users/user/user.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolverService} from './servers/server/server-resolver.service';

// FIRST define our routes and the components they load
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
  { path: 'servers', /*canActivate: [AuthGuardService]*/ canActivateChild: [AuthGuardService], component: ServersComponent, children: [
      // the 'resolve' property is very usefull for handling async data
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolverService} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  // double asterisk catch all routes that are not set
  // IMPORTANT the order of the routes matters, the routes get parsed from top to bottom
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  // we configure the module in imports
  imports: [
    // SECOND import the RouterModule and give it the routes defined in FIRST step
    RouterModule.forRoot(appRoutes, {useHash: true})
    // use hash tells the server to worry only about the part before the # symbol, then the server
    // won't return 404 when the users navigate throw URL, because an SPA consists only in one page, therefore, with one URL
  ],
  // we make the module accesible in exports
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
