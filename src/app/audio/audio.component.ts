import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  filePath: string;
  msbapTitle = 'Audio Manual';
  msbapAudioUrl = 'Not Found';
  msbapDisplayTitle = true;

  ngOnInit() {
  }
  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      console.log(params);
      if (params["fileName"]) {
        this.filePath = "../assets/" + params["fileName"];
        this.msbapAudioUrl = this.filePath;
        console.log(this.filePath);
      }
    });
  }
}
