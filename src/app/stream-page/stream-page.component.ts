import {Component, OnInit} from '@angular/core';
import {StreamsService} from '../streams.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {
  public stream: any;

  constructor(private route: ActivatedRoute, private service: StreamsService) {
  }

  ngOnInit() {
    this.getSteam();
  }

  getSteam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getStream(id).subscribe(stream => this.stream = stream);
  }

}
