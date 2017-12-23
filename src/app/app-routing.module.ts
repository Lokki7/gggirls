import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {StreamPageComponent} from './stream-page/stream-page.component';

const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: ':id', component: StreamPageComponent},
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
