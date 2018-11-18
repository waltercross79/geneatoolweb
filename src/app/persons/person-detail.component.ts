import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Person } from '../model/person.model';
import { PersonRepository } from '../model/person.repository';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person = new Person();

  constructor(private personRepo: PersonRepository,
    router: Router, activeRoute: ActivatedRoute) { 
    // parse the route and retrieve person ID:
    Object.assign(this.person,
          personRepo.getPerson(activeRoute.snapshot.params["id"]));
    //this.person = new Person(1, "Lada", "Kriz", "", new Date(1979, 10, 26), null);
  }

  ngOnInit() {
  }

}
