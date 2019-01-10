import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MydashbordComponent } from './mydashbord/mydashbord.component';
import { TableComponent } from './table/table.component';
import {MaterialModule} from "./material/material.module";
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {AuthGuard} from "./services/auth.guard";
import {MessageService} from "./services/message.service";
import { SelectBoardComponent } from './select-board/select-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MydashbordComponent,
    TableComponent,
    LoginComponent,
    NotfoundComponent,
    SelectBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
