import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  filePath: string;
  constructor(private route: ActivatedRoute) {
    
    this.route.params.subscribe(params => {
      console.log(params);
      if (params["fileName"]) {
        this.filePath = "../assets/"+params["fileName"];
        console.log(this.filePath);
      }
    });
  }

  ngOnInit() {
  }

}
