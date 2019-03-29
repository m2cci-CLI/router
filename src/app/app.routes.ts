import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormationsComponent } from './formations/formations.component';

export const PATH_HOME = '';
export const PATH_DETAIL = 'detail/:idDetail';
export const PATH_DETAIL_FORMATIONS = 'formations';
export const PATH_DETAIL_SKILLS = 'connaissances';
export const ROUTES: Routes = [
{ path: PATH_HOME, component: HomeComponent },
{
path: PATH_DETAIL,

children: [
{ path: '', pathMatch: 'full', redirectTo: PATH_DETAIL_FORMATIONS },
{ path: PATH_DETAIL_FORMATIONS, component: FormationsComponent },

]
}
];