import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() stream: any;
  public url: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnChanges() {
    if (this.stream) {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://goodgame.ru/player?' + this.stream.streamkey + '#autoplay');
    }
  }

  ngOnInit() {
  }

}
