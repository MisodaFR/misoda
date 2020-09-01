import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {PeopleData} from '../../providers/people-data';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
})
export class PersonDetailsPage {
  person: any;

  constructor(private route: ActivatedRoute,
              private personData: PeopleData,
              public inAppBrowser: InAppBrowser) { }

  ionViewWillEnter() {
    this.personData.getPeople().subscribe((data: any) => {
      const appId = this.route.snapshot.paramMap.get('personId');
      for (const a of data) {
        if (a && a.id === appId) {
          this.person = a;
          break;
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }
}
