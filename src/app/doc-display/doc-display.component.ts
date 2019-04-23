import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-doc-display',
  templateUrl: './doc-display.component.html',
  styleUrls: ['./doc-display.component.css']
})
export class DocDisplayComponent implements OnInit {

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
