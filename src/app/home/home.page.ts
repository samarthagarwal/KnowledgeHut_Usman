import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  people: any[] = [
    {
      index: 0,
      isActive: true,
      balance: "$2,882.02",
      picture: "http://placehold.it/32x32",
      name: "Tyler Grimes",
      gender: "male",
    },
    {
      index: 1,
      isActive: true,
      balance: "$3,838.62",
      picture: "http://placehold.it/32x32",
      name: "Nadine Wilson",
      gender: "female",
    },
    {
      index: 2,
      isActive: false,
      balance: "$1,318.73",
      picture: "http://placehold.it/32x32",
      name: "Martinez Castro",
      gender: "male",
    },
    {
      index: 3,
      isActive: false,
      balance: "$2,027.11",
      picture: "http://placehold.it/32x32",
      name: "Willis Powers",
      gender: "male",
    },
    {
      index: 4,
      isActive: true,
      balance: "$1,560.67",
      picture: "http://placehold.it/32x32",
      name: "Helen Cobb",
      gender: "female",
    },
    {
      index: 5,
      isActive: false,
      balance: "$1,276.12",
      picture: "http://placehold.it/32x32",
      name: "Angelique Ortiz",
      gender: "female",
    },
    {
      index: 6,
      isActive: false,
      balance: "$2,768.57",
      picture: "http://placehold.it/32x32",
      name: "Elizabeth Flynn",
      gender: "female",
    },
    {
      index: 7,
      isActive: false,
      balance: "$3,661.02",
      picture: "http://placehold.it/32x32",
      name: "Mattie Williams",
      gender: "female",
    },
    {
      index: 8,
      isActive: true,
      balance: "$3,433.50",
      picture: "http://placehold.it/32x32",
      name: "Kathryn Holt",
      gender: "female",
    },
    {
      index: 9,
      isActive: true,
      balance: "$2,022.55",
      picture: "http://placehold.it/32x32",
      name: "Shawna Figueroa",
      gender: "female",
    },
    {
      index: 10,
      isActive: true,
      balance: "$1,737.46",
      picture: "http://placehold.it/32x32",
      name: "Hatfield Rutledge",
      gender: "male",
    },
    {
      index: 11,
      isActive: true,
      balance: "$3,512.70",
      picture: "http://placehold.it/32x32",
      name: "Georgina Bass",
      gender: "female",
    },
    {
      index: 12,
      isActive: false,
      balance: "$2,207.04",
      picture: "http://placehold.it/32x32",
      name: "Ingrid Mcfadden",
      gender: "female",
    },
  ];

  constructor() {}

  refresh(event) {
    setTimeout(() => {
      this.people.unshift({
        index: 0,
        isActive: false,
        balance: "$2,053.55",
        picture: "http://placehold.it/32x32",
        name: "Joanne Henry",
        gender: "female",
      });

      event.target.complete();
    }, 3000);
  }

  loadMoreData(event) {
    setTimeout(() => {
      // backup the original list
      let peopleCopy = this.people;

      // reverse the copied list
      peopleCopy.reverse();

      // combine
      this.people = this.people.concat(peopleCopy);
      console.log(this.people);

      event.target.complete();
    }, 2000);
  }
}
