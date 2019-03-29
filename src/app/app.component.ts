import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'route';
  idDetail: any;

  constructor(private router: Router) { }

  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    });
  }
}
