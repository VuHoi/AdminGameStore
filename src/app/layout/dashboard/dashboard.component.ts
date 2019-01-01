import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: '',
                text:
                    ''
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: '',
                text:
                    ''
            }
        );

    }

    ngOnInit() {}
}
