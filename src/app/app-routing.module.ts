import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarMenuComponent} from "./war/war-menu/war-menu.component";


const routes: Routes = [
  {path: '', redirectTo: '/war', pathMatch: 'full'},
  {path: 'war', component: WarMenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
