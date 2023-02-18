import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewparticipationsComponent } from './viewparticipations/viewparticipations.component';
import { HttpClientModule } from '@angular/common/http';
import { AddparticipationComponent } from './addparticipation/addparticipation.component';
import { EditparticipationComponent } from './editparticipation/editparticipation.component';
import { ApprovedParticipationComponent } from './approved-participation/approved-participation.component';
import { PendingParticipationComponent } from './pending-participation/pending-participation.component';
import { DeclinedParticipationComponent } from './declined-participation/declined-participation.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewparticipationsComponent,
    AddparticipationComponent,
    EditparticipationComponent,
    ApprovedParticipationComponent,
    PendingParticipationComponent,
    DeclinedParticipationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
