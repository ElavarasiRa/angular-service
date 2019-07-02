import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { DatabaseComponent } from './database/database.component';
import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatabaseComponent,
    DetailsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'header'},
      {path:'header',component:HeaderComponent,
    children:[
      {path:'details',component:DetailsComponent},
      {path:'database',component:DatabaseComponent},
      {path:'view/:id',component:ViewComponent}
      ]}
      ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
