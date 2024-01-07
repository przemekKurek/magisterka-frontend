import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WarMenuComponent} from "./war/war-menu/war-menu.component";
import {CompareTableComponent} from "./war/compare-table/compare-table.component";
import {HelpComponent} from "./help/help/help.component";
import {CompareStrengthComponent} from "./war/compare-strength/compare-strength.component";


const routes: Routes = [
  {path: '', redirectTo: '/war', pathMatch: 'full'},
  {path: 'war', component: WarMenuComponent},
  {path: 'compare', component: CompareTableComponent},
  {path: 'help', component: HelpComponent},
  {path: 'strength', component: CompareStrengthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
