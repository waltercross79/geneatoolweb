import { Component, OnInit } from '@angular/core';
import { RecordRepository } from '../model/record.repository';

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


  delete(id: string) {
    this.recordRepo.deleteRecord(id);
  }
}
