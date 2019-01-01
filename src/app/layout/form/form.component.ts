import { Component, OnInit, TemplateRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { PublisherService } from './publisher.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor(private publisherService: PublisherService,
        private modalService: BsModalService) {
        this.publisherService.getPublisher().subscribe((data: any) => this.publishers = data.payload);
    }
    publishers: any;
    modalRef: BsModalRef;
    index: number;
    publisher: any;
    ngOnInit() {
        this.publisher = {
            name: '',
            money: 0,
            reliability: 1
        };
    }
    delete() {
        this.publishers.splice(this.index, 1);
        this.modalRef.hide();
    }
    openModal(template: TemplateRef<any>, index: number) {
        this.modalRef = this.modalService.show(template);
        this.index = index;
        this.publisher = this.publishers[this.index];
    }
    addPublisher() {

        this.publisherService.postPublisher(this.publisher).subscribe((data: any) => {
            console.log(data);
            this.publisherService.postImagePublisher({
                publisherId: data.payload.id,
                urlOnline: this.publisher.urlOnline
            }).subscribe(data1 => {
                this.publisherService.getPublisher().subscribe((data2: any) => this.publishers = data2.payload);
                this.modalRef.hide();
            });
        });
    }
    editPublisher() {
        this.publisherService.editPublisher({
            id: this.publishers[this.index].id,
            name: this.publishers[this.index].name,
            money: this.publishers[this.index].money,
            reliability: this.publishers[this.index].reliability
        }).subscribe(data => console.log(data));
        this.modalRef.hide();
    }

}
