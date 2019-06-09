import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import {Server} from './Server.model';
import {ServersService} from '../servers.service';

@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serverService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Server> |
          Promise<Server> |
          Server {
    return this.serverService.getServer(+route.params['id']);
  }

}
