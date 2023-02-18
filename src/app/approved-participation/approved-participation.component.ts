import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Participation } from 'src/Models/Participation';
import { ParticipationService } from '../participation.service';

@Component({
  selector: 'app-approved-participation',
  templateUrl: './approved-participation.component.html',
  styleUrls: ['./approved-participation.component.css']
})
export class ApprovedParticipationComponent implements OnInit{
  plist:Participation[];
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};

  constructor(private participationservice:ParticipationService) {
    }

    ngOnInit(): void {
      this.participationservice.getapprovedparticipations().subscribe(
        data=>{
          this.plist=data;
          console.log(this.plist);
        });
    }
  

 
}
