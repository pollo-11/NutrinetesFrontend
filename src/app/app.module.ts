import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNutrientsComponent } from './components/add-nutrients/add-nutrients.component';
import { HomeComponent } from './components/home/home.component';
import { ListNutrientsComponent } from './components/list-nutrients/list-nutrients.component';
import { Listerfilter } from './services/listerfilter.service.service';
@NgModule({
  declarations: [
    AppComponent,
    AddNutrientsComponent,
    HomeComponent,
    ListNutrientsComponent,
    Listerfilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgSelectModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
