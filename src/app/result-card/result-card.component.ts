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
      this.router.navigateByUrl('/displayMedia');
    }
    else if (this.metadata.volumeType === 'MP3') {
      this.router.navigateByUrl('/audio');
    }
    else if (this.metadata.volumeType === 'MP4') {
      this.router.navigateByUrl('/video');
    }

  }
}


