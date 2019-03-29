import { Component, OnInit } from '@angular/core';
import { PATH_HOME, PATH_DETAIL } from '../app.routes.constantes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {



  constructor(private route: Router, private router: ActivatedRoute) { }

  navigateToHome() {
    this.route.navigate([PATH_HOME]);
  }
  navigateTopast() {
    this.route.navigate([PATH_DETAIL, parseInt(this.router.snapshot.paramMap.get('idDetail')) + 1]);
  }
  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      });
    console.log('idDetail snapshot', this.router.snapshot.paramMap.get('idDetail'));
  }

}
