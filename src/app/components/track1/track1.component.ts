import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-track1',
  templateUrl: './track1.component.html',
  styleUrls: ['./track1.component.scss'],
  providers: [UserService]
})
export class Track1Component implements OnInit {
  public idTrack
  public token
  public identity
  public track: Track
  public description: []
  public iconTrack;
  public preRequisitos = new Array()
  public track6: Boolean = false;
  public requisitosSoftWareTrack6;
  constructor(private activatedRoute: ActivatedRoute, 
    private _userService: UserService) { 
      this.token = this._userService.getToken()
      this.track = new Track("","",[],[],[],"","",[],"","",[],"","","","",[])
    }

  ngOnInit() {
    this.idTrack = this.activatedRoute.snapshot.paramMap.get("id")
    this.getTrack(this.idTrack)
  }

  getTrack(id){
    this._userService.getTrak(id).subscribe(
      response=>{
        this.track = response.track;
        this.description = response.track.descripcion
        this.iconTrack = response.track.icon;
        this.preRequisitos = this.track.preRequisito
        if (this.track._id == "5d39e4c2e7179a064fa9172c") {
          this.track6 = true;
          console.log(this.preRequisitos[2].preReq.split(' '));
          this.requisitosSoftWareTrack6 = this.preRequisitos[2].preReq.split(' ')
        }
        
      }
    )
  }

}
