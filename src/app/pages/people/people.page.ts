import {Component} from '@angular/core';
import {PeopleData} from '../../providers/people-data';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage {

  people: any[] = [];

  constructor(private peopleData: PeopleData) { }

  ionViewDidEnter() {
    this.peopleData.getPeople().subscribe((people: any[]) => {
      this.people = people;
    });
  }

}
