import { Component, OnInit } from '@angular/core';
import { PATH_DETAIL } from '../app.routes.constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}


  navigateToDetail() {
    this.router.navigate([PATH_DETAIL,1]);
  }


  ngOnInit() {
  }

}
