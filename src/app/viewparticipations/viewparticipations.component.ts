import { Component, OnInit } from '@angular/core';
import { Participation } from 'src/Models/Participation';
import { ParticipationService } from '../participation.service';

@Component({
  selector: 'app-viewparticipations',
  templateUrl: './viewparticipations.component.html',
  styleUrls: ['./viewparticipations.component.css']
})
export class ViewparticipationsComponent implements OnInit{
  plist:Participation[];
  message:string;

  constructor(private participationservice:ParticipationService) { }


  ngOnInit(): void {
    this.participationservice.getparticipations().subscribe(
      data=>{
        this.plist=data;
        console.log(this.plist);
      });
  }

  

}
