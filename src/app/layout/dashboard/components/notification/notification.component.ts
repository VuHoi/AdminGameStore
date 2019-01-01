import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline/timeline.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    timelines: any;
    constructor(private timelineService: TimelineService) {
        this.timelineService.getTimeLine().subscribe((data: any) => this.timelines = data.payload);
    }

    ngOnInit() { }
}
