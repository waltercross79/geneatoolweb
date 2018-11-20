import { Component, OnInit } from '@angular/core';
import { RecordRepository } from '../model/record.repository';
import { Router, ActivatedRoute } from '@angular/router';
import { Record } from '../model/record.model';
import { RecordType } from '../model/record-type.enum';

@Component({
  selector: 'app-record-editor',
  templateUrl: './record-editor.component.html',
  styleUrls: ['./record-editor.component.css']
})
export class RecordEditorComponent implements OnInit {

  isEditing: boolean;
  record: Record = new Record();
  recordTypes: [number, string][] = [
    [RecordType.Birth, RecordType[RecordType.Birth]],
    [RecordType.Marriage, RecordType[RecordType.Marriage]],
    [RecordType.Death, RecordType[RecordType.Death]],
  ]

  constructor(recordRepo: RecordRepository, 
    router: Router, activeRoute: ActivatedRoute) { 
      
      this.isEditing = activeRoute.snapshot.params['mode'] == 'edit';
      if(this.isEditing) {
        Object.assign(this.record, recordRepo.getRecord(activeRoute.snapshot.params['id']));
      }
  }

  ngOnInit() {
  }

}
