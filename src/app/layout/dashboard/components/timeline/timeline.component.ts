import { Component, OnInit } from '@angular/core';
import { TimelineService } from './timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timelines: any;
  constructor(private timelineService: TimelineService) {
    this.timelineService.getTimeLine().subscribe((data: any) => this.timelines = data.payload);
   }

  ngOnInit() {
  }

}
