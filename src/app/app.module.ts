import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {MainpageComponent} from './mainpage/mainpage.component';
import {HeaderComponent} from './mainpage/header/header.component';
import {ListComponent} from './mainpage/list/list.component';
import {StreamComponent} from './mainpage/list/stream/stream.component';
import {StreamsService} from './streams.service';
import {HttpClientModule} from '@angular/common/http';
import { StreamPageComponent } from './stream-page/stream-page.component';
import { PlayerComponent } from './stream-page/player/player.component';
import { ChatComponent } from './stream-page/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    HeaderComponent,
    ListComponent,
    StreamComponent,
    StreamPageComponent,
    PlayerComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StreamsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
