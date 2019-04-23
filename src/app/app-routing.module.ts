import { TestEsComponent } from './test-es/test-es.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocDisplayComponent } from './doc-display/doc-display.component';
import { AudioComponent } from "./audio/audio.component";
import { VideoComponent } from "./video/video.component";

const routes: Routes = [
  { path: 'status', component: TestEsComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'search', component: SearchComponent },
  { path: 'pdf/:fileName', component: DocDisplayComponent },
  { path: 'audio/:fileName', component: AudioComponent },
  { path: 'video/:fileName', component: VideoComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
