import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddparticipationComponent } from './addparticipation/addparticipation.component';
import { ApprovedParticipationComponent } from './approved-participation/approved-participation.component';
import { DeclinedParticipationComponent } from './declined-participation/declined-participation.component';
import { EditparticipationComponent } from './editparticipation/editparticipation.component';
import { PendingParticipationComponent } from './pending-participation/pending-participation.component';
import { ViewparticipationsComponent } from './viewparticipations/viewparticipations.component';

const routes: Routes = [
  {path:'viewparticipations',component:ViewparticipationsComponent},
  {path:'addparticipation',component:AddparticipationComponent},
  {path:'editparticipation/:id',component:EditparticipationComponent},
  {path:'approvedparticipation',component:ApprovedParticipationComponent},
  {path:'pendingparticipation',component:PendingParticipationComponent},
  {path:'declinedparticipation',component:DeclinedParticipationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
