import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {
  @Input() stream: any;
  public url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    if (this.stream) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://goodgame.ru/chat/' + this.stream.channelKey);
    }
  }

  ngOnInit() {
  }

}
