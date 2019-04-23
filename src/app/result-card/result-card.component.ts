import { Component, OnInit, Input } from '@angular/core';
import { Metadata } from '../search/metadata.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})

export class ResultCardComponent implements OnInit {
 
  @Input() metadata: Metadata;
  router: Router
  
  ngOnInit(): void {
    
  }

  constructor(_router: Router) {
    this.router = _router;
  }
  
  goToRoute() {
    if (this.metadata.volumeType === 'PDF') {
      var myPdfUrl = `/pdf/${this.metadata.contentFileName}`;
      this.router.navigateByUrl(myPdfUrl);
    }
    else if (this.metadata.volumeType === 'MP3') {
      var myAudioUrl = `/audio/${this.metadata.contentFileName}`;
      this.router.navigateByUrl(myAudioUrl);
    }
    else if (this.metadata.volumeType === 'MP4') {
      var myVideoUrl = `/video/${this.metadata.contentFileName}`;
      this.router.navigateByUrl(myVideoUrl);
    }

  }
}


