import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
// import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private location: Location, private routerService: RouterService) { 

    let person = this.routerService.getPerson();
    console.log(person);

  }

  ngOnInit() {
  }

  gobackToHome() {
    this.location.back();
  }

}
