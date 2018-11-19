import { Component, OnInit } from '@angular/core';
import { RecordRepository } from '../model/record.repository';
import { Record } from '../model/record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  recordList: Record[];

  constructor(private recordRepo: RecordRepository) { 
    this.recordList = recordRepo.getRecords();
  }

  ngOnInit() {
  }

}
