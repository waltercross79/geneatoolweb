import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  @Input() person: Person = new Person();
  @Input() isNested: boolean = false;
  genders: [string, string][] = [['M', 'Male'], ['F', 'Female']];

  constructor(private personRepo: PersonRepository,
    router: Router, activeRoute: ActivatedRoute) { 
    // parse the route and retrieve person ID:
    Object.assign(this.person,
          personRepo.getPerson(activeRoute.snapshot.params['id']));
  }

  ngOnInit() {
  }

}
