import { Component, OnDestroy, OnInit } from '@angular/core';
import { Participation } from 'src/Models/Participation';
import { ParticipationService } from '../participation.service';

@Component({
  selector: 'app-addparticipation',
  templateUrl: './addparticipation.component.html',
  styleUrls: ['./addparticipation.component.css']
})
export class AddparticipationComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(private participationservice:ParticipationService){

  }
  p:Participation={participationId:null,playerId:null,playerName:"",eventId:null,eventName:"",sportsId:null,sportsName:"",status:"",comments:""};  
  message:string;
  
  saveplayer(data:any):void
  {
   this.participationservice.addparticipation(data).subscribe(
     data=>{
       this.message="Participation Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.p);
  }
}
