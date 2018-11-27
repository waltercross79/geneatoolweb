import { Component, OnInit } from '@angular/core';
import { RecordRepository } from '../model/record.repository';
import { Record } from '../model/record.model';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {  

  constructor(private recordRepo: RecordRepository) { 
    
  }

  ngOnInit() {
    
  }

  getRecords() {
    return this.recordRepo.getRecords();
  }

}
