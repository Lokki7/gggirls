import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit, OnChanges {
  @Input() stream: any;

  constructor() {
  }

  ngOnChanges() {
    const stream = this.stream;
    this.stream.preview = (!stream.preview || stream.preview.indexOf('//') === -1) ? '' : stream.preview;
    if (this.stream.poster == '/images/ico_tv.png') {
      this.stream.poster = 'https://static.goodgame.ru/images/ico_tv.png';
    }
  }

  ngOnInit() {
  }

}
