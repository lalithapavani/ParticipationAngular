import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from 'src/Models/Participation';
import { ParticipationService } from '../participation.service';

@Component({
  selector: 'app-declined-participation',
  templateUrl: './declined-participation.component.html',
  styleUrls: ['./declined-participation.component.css']
})
export class DeclinedParticipationComponent implements OnInit{
  plist:Participation[];
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null, eventName:"", sportsId:null, sportsName:"", status:"", comments:""};

  constructor(private participationservice:ParticipationService) {
    }

    ngOnInit(): void {
      this.participationservice.getdeclinedparticipations().subscribe(
        data=>{
          this.plist=data;
          console.log(this.plist);
        });
    }
  
}
