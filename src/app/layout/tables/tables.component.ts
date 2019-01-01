import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from './user.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    users: any;
    constructor(private userService: UserService) {
        this.userService.getUser().subscribe((data: any) => this.users = data.payload);
    }
    delete(index) {
        this.users.splice(index, 1);
    }
    ngOnInit() { }
}
