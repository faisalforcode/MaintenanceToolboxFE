import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TestEsComponent } from './test-es/test-es.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MyNavComponent } from './my-nav/my-nav.component';
import { MyMaterialModule } from './material.module';
import { ResultCardComponent } from './result-card/result-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DocDisplayComponent } from './doc-display/doc-display.component';
import { BnNgPdfViewerModule } from 'bn-ng-pdf-viewer';
import { AudioComponent } from './audio/audio.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { VideoComponent } from './video/video.component';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [
    AppComponent,
    TestEsComponent,
    UploadComponent,
    SearchComponent,
    MyNavComponent,
    ResultCardComponent,
    LandingPageComponent,
    DocDisplayComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MyMaterialModule,
    BnNgPdfViewerModule,
    NgxAudioPlayerModule,
    MatVideoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
