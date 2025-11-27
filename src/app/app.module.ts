import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReplaceReservoirComponent } from './replace-reservoir/replace-reservoir.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowClockComponent } from './show-clock/show-clock.component';
import { AllDoseDataComponent } from './all-dose-data/all-dose-data.component';
import { LastDoseDataComponent } from './last-dose-data/last-dose-data.component';
import { RouterModule } from '@angular/router';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { DBService } from './services/db.service';

const myRoutes = [
  {path: '', component: LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'ReplaceReservoir', component: ReplaceReservoirComponent},
  {path: 'showclock', component: ShowClockComponent},
  {path: 'alldose', component: AllDoseDataComponent},
  {path: 'lastdose', component: LastDoseDataComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ReplaceReservoirComponent,
    LoginComponent,
    HomeComponent,
    ShowClockComponent,
    AllDoseDataComponent,
    LastDoseDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
