import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'Link to audio URL';   
   
msbapDisplayTitle = false; 
  constructor() { }
  ngOnInit() {
  }
}
