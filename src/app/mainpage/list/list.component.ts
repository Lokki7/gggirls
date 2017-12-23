import {Component, OnInit} from '@angular/core';
import {StreamsService} from '../../streams.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  constructor(private service: StreamsService) {
  }

  ngOnInit() {
    this.service.getStreams().subscribe((data: any) => {
      this.items = data.streams;
    });
  }

}
