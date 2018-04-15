import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IAudioFeatures } from './AudioFeatures';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _spotifyService: SpotifyService){
  }


  public barChartLabels:string[];
  public barChartType:string;
  public barChartData:any[];
  public radarChartType:string;
  public barChartLegend:boolean = false;  

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.loadTrackData(id);
      this.loadTrackAudioFeaturesData(id);
    }
  }
  
  data = {    
  };


  audioFeaturesData: IAudioFeatures; 

  loadTrackData(id: string): void{
    this._spotifyService.getTrackDetails(id).subscribe(
      data => {
        console.log(data);
        this.data = data.data.body;
      }
    )        
  }

  loadGraph(): void{
    this.barChartLabels = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];
    this.barChartType = 'bar';
    this.radarChartType = 'radar';       
    this.barChartData = [
   {data: [
     this.audioFeaturesData.danceability, 
     this.audioFeaturesData.energy,
     this.audioFeaturesData.speechiness,
     this.audioFeaturesData.acousticness,
     this.audioFeaturesData.instrumentalness,
     this.audioFeaturesData.liveness,
     this.audioFeaturesData.valence]}    
    ];      
 }
  
  loadTrackAudioFeaturesData(id: string): void{
    this._spotifyService.getTrackAudioFeaturesDetails(id).subscribe(
      data => {
        console.log(data);
        this.audioFeaturesData = data.data.body;
        this.loadGraph();
      }
    )        
  }

  

  
   


}
