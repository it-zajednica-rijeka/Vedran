import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // the '+' sign make casting from string to number
    // this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    // this.route.params
    //    .subscribe((params: Params) => {
    //      this.server = this.serversService.getServer(+params['id']);
    //    });

    // Usage of the resolver to obtain the data
     this.route.data
       .subscribe(
         (data: Data) => {
           // the string in the brakets has to match with the name we set up in the routing-module within 'resolve'
           this.server = data['server'];
         }
       );
  }

  onEdit(id: number) {
    this.router.navigate([`edit`], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
