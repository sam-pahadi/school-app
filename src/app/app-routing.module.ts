/**
 * Created by ksachan on 31-Jul-18.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login/login.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AuthGuard} from "./services/auth.guard";
import {SelectBoardComponent} from "./select-board/select-board.component";

const routes: Routes = [
  {path: '', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'board', component: SelectBoardComponent},
  //not found page
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
