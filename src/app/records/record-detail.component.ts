import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Record } from '../model/record.model';
import { RecordRepository } from '../model/record.repository';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {

  record: Record = new Record();

  constructor(private recordRepo: RecordRepository, router: Router, 
    activeRoute: ActivatedRoute) { 
      Object.assign(this.record, recordRepo.getRecord(activeRoute.snapshot.params['id']));
    }

  ngOnInit() {
  }

}
